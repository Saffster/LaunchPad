// src/pages/Home.jsx
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white flex flex-col">
      <header className="w-full px-6 py-4 flex justify-between items-center shadow-md bg-opacity-30 bg-white backdrop-blur">
        <Link to="/" className="text-xl font-bold flex items-center gap-2">
          🚀 Startup Marketplace
        </Link>
        <div className="space-x-4">
          <Link to="/login" className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-100 font-medium">
            Login
          </Link>
          <Link to="/register" className="bg-blue-600 border border-white px-4 py-2 rounded hover:bg-blue-700 font-medium">
            Register
          </Link>
        </div>
      </header>

      <main className="flex-grow flex flex-col justify-center items-center text-center px-6 py-16">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Share. Collaborate. Innovate.</h1>
        <p className="text-lg md:text-xl max-w-2xl mb-8">
          The marketplace for startup ideas where entrepreneurs meet collaborators and investors.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            to="/post"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 transition"
          >
            Post Your Idea
          </Link>
          <Link
            to="/about"
            className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
          >
            How It Works
          </Link>
        </div>
      </main>

      <footer className="bg-white text-gray-700 py-8 px-6 text-sm text-center">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">
          <div>
            <h4 className="font-bold mb-2">Startup Marketplace</h4>
            <p>Connecting innovators with collaborators and investors to bring great ideas to life.</p>
          </div>
          <div>
            <h4 className="font-bold mb-2">Explore</h4>
            <ul className="space-y-1">
              <li><Link to="/explore">Popular Ideas</Link></li>
              <li><Link to="/categories">Categories</Link></li>
              <li><Link to="/top">Top Contributors</Link></li>
              <li><Link to="/about">How It Works</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Company</h4>
            <ul className="space-y-1">
              <li>About Us</li>
              <li>Careers</li>
              <li>Press</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Stay Connected</h4>
            <p>Subscribe to our newsletter for the latest startup ideas and updates.</p>
            <input
              type="email"
              placeholder="Your email"
              className="mt-2 p-2 w-full border rounded"
            />
          </div>
        </div>
        <div className="mt-6">&copy; 2025 Startup Marketplace. All rights reserved.</div>
      </footer>
    </div>
  );
}
