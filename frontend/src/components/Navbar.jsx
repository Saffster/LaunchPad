import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold flex items-center gap-2">
          <span role="img" aria-label="rocket">🚀</span> Startup Marketplace
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex gap-8 font-medium">
          <Link to="/explore" className="hover:text-blue-200">Explore</Link>
          <Link to="/categories" className="hover:text-blue-200">Categories</Link>
          <Link to="/top" className="hover:text-blue-200">Top Ideas</Link>
          <Link to="/about" className="hover:text-blue-200">About</Link>
        </nav>

        {/* Auth Buttons */}
        <div className="space-x-3">
          <Link to="/login" className="px-4 py-2 rounded bg-white text-blue-600 hover:bg-blue-100 font-semibold">
            Login
          </Link>
          <Link to="/register" className="px-4 py-2 rounded border border-white hover:bg-white hover:text-blue-600 font-semibold">
            Register
          </Link>
        </div>
      </div>
    </header>
  );
}
