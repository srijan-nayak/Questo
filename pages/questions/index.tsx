import { GetServerSideProps } from "next";
import { Question } from "@/schemas/schema";
import client from "@/sanity-clients/client";
import Layout from "@/components/layout";
import Link from "next/link";

interface QuestionsPageProp {
  questions: Question[];
}

const QuestionsPage = ({ questions }: QuestionsPageProp) => {
  return (
    <Layout>
      {/*TODO: Build questions page UI according to design*/}
      {questions.map((question) => (
        <Link href={`/questions/${question._id}`} key={question._id}>{question.title}</Link>
      ))}
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
