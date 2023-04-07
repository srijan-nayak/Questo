import { useState } from "react";
import Layout from "@/components/layout";

const CreateQuestionPage = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title || !details) {
      alert("Please fill in all fields.");
      return;
    }
    try {
      const response = await fetch("/api/questions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, details }),
      });
      if (response.status === 201) {
        alert("Question has been posted successfully.");
        setTitle("");
        setDetails("");
      } else {
        alert("Question couldn't be posted because something went wrong.");
      }
    } catch {
      alert("Question couldn't be posted because something went wrong.");
    }
  };

  return (
    <Layout>
      <div className="flex flex-col gap-10">
        <h1 className="text-justify text-gray-500 font-bold text-3xl">
          Ask a new question
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-8 p-5 rounded bg-gray-50 drop-shadow-lg"
        >
          <div className="flex flex-col gap-3.5">
            <label
              htmlFor="title"
              className="text-xl font-semibold text-gray-600"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              className="px-2.5 py-2 rounded bg-gray-200 font-medium text-gray-700"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-3.5">
            <label
              htmlFor="details"
              className="text-xl font-semibold text-gray-600"
            >
              Details
            </label>
            <textarea
              id="details"
              className="px-2.5 py-2 rounded bg-gray-200 font-medium text-gray-700"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-emerald-600 hover:bg-emerald-500 text-lg text-gray-50 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default CreateQuestionPage;
