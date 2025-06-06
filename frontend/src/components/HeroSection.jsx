import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20 px-4 text-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-indigo-900/90"></div>
      <div className="relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          Share. Collaborate. Innovate.
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-blue-100 leading-relaxed">
          The marketplace for startup ideas where entrepreneurs meet
          collaborators and investors.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/post"
            className="bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Post Your Idea
          </Link>
          <Link
            to="/about"
            className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-700 hover:scale-105 transition-all duration-200"
          >
            How It Works
          </Link>
        </div>
      </div>
    </section>
  );
}
