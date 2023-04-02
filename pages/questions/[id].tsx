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
        <p className="text-lg text-gray-500">Loading...</p>
      ) : (
        <div className="flex flex-col gap-10">
          <h1 className="text-gray-500 font-bold text-3xl">
            {props.question[0].title}
          </h1>
          <section className="flex flex-col gap-4 px-5 py-4 rounded drop-shadow-lg bg-gray-50">
            <h2 className="text-sm leading-5 font-semibold text-gray-500">
              QUESTION DETAILS
            </h2>
            <p className="text-base leading-6 font-semibold text-gray-600">
              {props.question[0].details}
            </p>
          </section>
          {props.answer[0]?.text ? (
            <section className="flex flex-col bg-emerald-600 rounded px-5 py-4 gap-4 text-gray-50 drop-shadow-lg">
              <h2 className="text-sm leading-5 font-semibold">ANSWER</h2>
              <p>{props.answer[0]?.text}</p>
            </section>
          ) : (
            <p className="px-5 py-4">NOT YET ANSWERED</p>
          )}
        </div>
      )}
    </Layout>
  );
};

export default QuestionDetailsPage;
