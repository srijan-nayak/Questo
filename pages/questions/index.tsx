import { GetServerSideProps } from "next";
import { Question } from "@/schemas/schema";
import client from "@/sanity-client";
import Layout from "@/components/layout";
import Link from "next/link";

interface QuestionsPageProp {
  questions: Question[];
}

const QuestionsPage = ({ questions }: QuestionsPageProp) => {
  return (
    <Layout>
    <div className="flex flex-col justify-items-center gap-10">
      <h1 className="text-3xl leading-9 font-bold text-gray-500">
        Questions
      </h1>
      <ul className="flex flex-col gap-8">
        {questions.map((question) => (
          <li
            key={question._id}
            className="text-xl leading-7 font-semibold gap-2 px-4 py-3 rounded drop-shadow-lg bg-gray-50 text-emerald-600"
          >
            <Link href={`/questions/${question._id}`}>{question.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const questions: Question[] = await client.fetch(
    `*[_type == "question"] | order(_createdAt desc)`
  );

  return {
    props: {
      questions,
    },
  };
};

export default QuestionsPage;
