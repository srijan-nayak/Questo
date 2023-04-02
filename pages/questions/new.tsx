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

   
  };

  return (
    <Layout>
      <div className=" flex flex-col gap-14 px-0 py-4 rounded  ">
        <div className="text-justify text-gray-500 py-0 font-bold text-3xl  ">
          Ask a new question 
        </div>
        <form
          onSubmit={handleSubmit}
          className=" flex flex-col  gap-7 px-5 py-8    bg-gray-50 drop-shadow-lg "
        >
          <div className="text-sm leading-5 font-bold text-500 text-2xl">  <label htmlFor="title">Title</label> </div>
          <input
            type="text"
            className="border border-gray-300 px-0 py-4 rounded-md bg-gray-200"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="font-bold text-sm text-black-500 text-2xl "> <label htmlFor="details"> Details</label>  </div>
          <textarea
            className=" flex border border-gray-300 px-5 py-4 rounded-md bg-gray-200"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          ></textarea>
          <button
            type="submit"
            className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2 px-12 rounded focus:outline-none focus:shadow-outline"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default CreateQuestionPage;