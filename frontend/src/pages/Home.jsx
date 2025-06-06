import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-indigo-700 text-white flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
        Share. Collaborate. Innovate.
      </h1>
      <p className="text-lg md:text-xl max-w-2xl mb-8">
        The marketplace for startup ideas where entrepreneurs meet collaborators and investors.
      </p>
      <div className="space-x-4">
        <Link to="/post" className="bg-white text-blue-600 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-100">
          Post Your Idea
        </Link>
        <Link to="/about" className="border border-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600">
          How It Works
        </Link>
      </div>
    </div>
  );
}
