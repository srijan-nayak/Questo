import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="flex min-h-screen">
      <main className="bg-white grow">
        <div className="max-w-screen-xl mx-auto flex flex-col gap-12 pt-60 px-24 pb-10">
          <h1 className="text-7xl font-semibold text-gray-700">
            <span className="text-emerald-600">Questo</span>: Your One-Stop
            Solution for Accurate Answers
          </h1>
          <p className="text-xl font-medium text-gray-600">
            Welcome to Questo, the Q&A platform that connects you with expert
            answers to your questions. Get the information you need quickly and
            easily without the hassle of logging in or sifting through
            irrelevant content. With Questo, you can ask any question and
            receive accurate, reliable answers from verified experts.
          </p>
          <div className="flex gap-6 items-center text-lg font-bold">
            <Link
              href="/questions/new"
              className="bg-emerald-600 hover:bg-emerald-500 rounded-lg px-4 py-2 text-gray-50"
            >
              Ask a New Question
            </Link>
            <Link href="/questions" className="text-gray-700 hover:underline">
              Browse Questions and Answers
            </Link>
          </div>
        </div>
      </main>
      <div className="bg-gradient-to-r from-emerald-800 to-emerald-600 max-w-screen-sm xl:w-full"></div>
    </div>
  );
};

export default LandingPage;
