import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-bold flex items-center gap-2 text-white hover:text-blue-100 transition-colors"
        >
          <span role="img" aria-label="rocket" className="text-2xl">
            🚀
          </span>
          <span>Startup Marketplace</span>
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex gap-8 font-medium">
          <Link
            to="/explore"
            className="text-white hover:text-blue-200 transition-colors px-3 py-2 rounded-md hover:bg-white/10"
          >
            Explore
          </Link>
          <Link
            to="/categories"
            className="text-white hover:text-blue-200 transition-colors px-3 py-2 rounded-md hover:bg-white/10"
          >
            Categories
          </Link>
          <Link
            to="/top"
            className="text-white hover:text-blue-200 transition-colors px-3 py-2 rounded-md hover:bg-white/10"
          >
            Top Ideas
          </Link>
          <Link
            to="/about"
            className="text-white hover:text-blue-200 transition-colors px-3 py-2 rounded-md hover:bg-white/10"
          >
            About
          </Link>
        </nav>

        {/* Auth Buttons */}
        <div className="flex gap-3">
          <Link
            to="/login"
            className="px-6 py-2 rounded-lg bg-white text-blue-700 hover:bg-blue-50 font-semibold transition-colors shadow-md"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="px-6 py-2 rounded-lg border-2 border-white text-white hover:bg-white hover:text-blue-700 font-semibold transition-all duration-200"
          >
            Register
          </Link>
        </div>
      </div>
    </header>
  );
}
