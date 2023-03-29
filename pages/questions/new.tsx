import { useState } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/layout";

const CreateQuestionPage = () => {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title || !details) {
      alert("Please fill in all fields.");
      return;
    }

    // TODO: POST question to /api/questions
  };

  return (
    <Layout>
      <div className="flex-col justify-items-center mx-4 my-76 space-y-10">
        <div className="text-justify text-gray-500 font-bold max-w-3xl max-h-9 text-3xl">
          Ask a new question
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex-col space-y-4 px-5 py-4 rounded drop-shadow-lg bg-gray-50"
        >
          <div className="font-semibold text-sm text-gray-500">Title</div>
          <input
            type="text"
            className="border border-gray-300 px-3 py-2 rounded-md w-full bg-gray-200"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="font-semibold text-sm text-gray-500 ">Details</div>
          <textarea
            className="border border-gray-300 px-3 py-2 rounded-md w-full bg-gray-200"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          ></textarea>
          <button
            type="submit"
            className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2 px-12 rounded focus:outline-none focus:shadow-outline w-full"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default CreateQuestionPage;
