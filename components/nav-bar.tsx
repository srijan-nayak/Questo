import Link from "next/link";


const NavBar = () => {
  return (
    <nav className="flex justify-between py-4">
      <Link href="/" className="font-bold text-emerald-700">
        Questo
      </Link>

      <ul className="flex gap-6 text-sm font-semibold">
        <li>
          <Link
            href="/questions/CreateQuestionPage"
            className="bg-emerald-600 hover:bg-emerald-500 text-gray-50 py-1 px-3 rounded"
          >
            Ask
          </Link>
        </li>
        <li>
          <Link href="/questions" className="text-gray-600 hover:underline">
            All Questions
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
