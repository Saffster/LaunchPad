import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold flex items-center gap-2 hover:opacity-90 transition-opacity">
          <span role="img" aria-label="rocket" className="text-2xl">🚀</span> 
          <span>Startup Marketplace</span>
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex gap-8 font-medium">
          <Link to="/explore" className="hover:text-gray-300 transition-colors px-2 py-1">
            Explore
          </Link>
          <Link to="/categories" className="hover:text-gray-300 transition-colors px-2 py-1">
            Categories
          </Link>
          <Link to="/top" className="hover:text-gray-300 transition-colors px-2 py-1">
            Top Ideas
          </Link>
          <Link to="/about" className="hover:text-gray-300 transition-colors px-2 py-1">
            About
          </Link>
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          <Link 
            to="/login" 
            className="px-6 py-2 rounded-lg bg-white text-gray-900 hover:bg-gray-100 font-semibold transition-colors shadow-sm"
          >
            Login
          </Link>
          <Link 
            to="/register" 
            className="px-6 py-2 rounded-lg border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold transition-all duration-200 shadow-sm"
          >
            Register
          </Link>
        </div>
      </div>
    </header>
  );
}