import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { Answer, Question } from "@/schemas/schema";
import Layout from "@/components/layout";
import { useRouter } from "next/router";

interface QuestionDetailsPageProps {
  question: Question[];
  answer: Answer[];
}

export const getStaticPaths: GetStaticPaths = async () => {
  const questions: Question[] = await client.fetch(`*[_type=='question']`);
  const paths = questions.map((a) => {
    return { params: { id: a._id } };
  });
  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext<ParsedUrlQuery, PreviewData>
) => {
  const id = context.params!.id;
  let question;

  question = await client.fetch(`*[_id=="${id}"]`);

  const answer = await client.fetch(
    `*[_type=='answer' && question._ref=="${id}"]`
  );
  if (!question[0]) {
    return { notFound: true };
  }
  return {
    props: {
      question: question,
      answer: answer,
    },
    revalidate: 30,
  };
};

const questiondetails = (props: prop) => {
  const router = useRouter();

  return (
    <Layout>
      {router.isFallback ? (
        <p className="text-lg text-gray-500">Loading...</p>
      ) : (
        <div className="flex flex-col gap-10">
          <h1 className="text-gray-500 font-bold text-3xl">
            {props.question[0].title}
          </div>
          <div className="flex-col space-y-4 px-5 py-4 rounded drop-shadow-lg bg-gray-50">
            <div className="font-semibold text-gray-500">QUESTION DETAILS</div>
            <div className="font-semibold text-gray-600">
              {props.question[0].details}
            </div>
          </div>
          {props.answer[0]?.text ? (
            <div className="flex-col bg-emerald-600 rounded px-5 py-4 space-y-4 text-gray-50 drop-shadow-lg">
              <div>ANSWER</div>
              <div>{props.answer[0]?.text}</div>
            </div>
          ) : (
            <div className="flex-col rounded px-5 py-4 space-y-4 drop-shadow-lg">
              NOT YET ANSWERED
            </div>
          )}
        </div>
      )}
    </Layout>
  );
};
export default questiondetails;
