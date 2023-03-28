import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { Answer, Question } from "@/schemas/schema";
import Layout from "@/components/layout";
import client from "@/sanity-clients/client";

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

export const getStaticProps: GetStaticProps = async (context) => {
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

const QuestionDetailsPage = (props: QuestionDetailsPageProps) => {
  const router = useRouter();

  return (
    <Layout>
      {router.isFallback ? (
        <div className="text-lg text-gray-500">Loading...</div>
      ) : (
        <div className="flex-col justify-items-center mx-4 my-76 space-y-10">
          <div className="text-justify text-gray-500 font-bold max-w-3xl max-h-9 text-3xl">
            {props.question[0].title}
          </div>
          <div className="flex-col space-y-4 px-5 py-4 rounded drop-shadow-lg bg-gray-50">
            <div className="font-semibold text-sm text-gray-500">
              QUESTION DETAILS
            </div>
            <div className="font-semibold text-gray-600 whitespace-pre-line">
              {props.question[0].details}
            </div>
          </div>
          {props.answer[0]?.text && (
            <div className="flex-col bg-emerald-600 rounded px-5 py-4 space-y-4 text-gray-50 drop-shadow-lg">
              <div className="font-semibold text-sm text-emerald-100">
                ANSWER
              </div>
              <div className="font-semibold text-gray-50 whitespace-pre-line">
                {props.answer[0]?.text}
              </div>
            </div>
          )}
        </div>
      )}
    </Layout>
  );
};

export default QuestionDetailsPage;
