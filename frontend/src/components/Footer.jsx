import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-semibold mb-2">Startup Marketplace</h3>
          <p className="text-sm">
            Connecting innovators with collaborators and investors to bring
            great ideas to life.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Explore</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <Link to="/top" className="hover:text-white">
                Popular Ideas
              </Link>
            </li>
            <li>
              <Link to="/categories" className="hover:text-white">
                Categories
              </Link>
            </li>
            <li>
              <Link to="/explore" className="hover:text-white">
                Top Contributors
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white">
                How It Works
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Company</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <Link to="/about" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <a href="#careers" className="hover:text-white">
                Careers
              </a>
            </li>
            <li>
              <a href="#press" className="hover:text-white">
                Press
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Stay Connected</h3>
          <p className="text-sm mb-2">
            Subscribe to our newsletter for the latest startup ideas and
            updates.
          </p>
          <form
            className="flex items-center"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 p-2 rounded-l bg-white text-gray-800 text-sm"
            />
            <button
              type="submit"
              className="p-2 bg-blue-500 rounded-r hover:bg-blue-600 text-white transition-colors"
            >
              📧
            </button>
          </form>
          <div className="flex gap-3 mt-4 text-lg">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              🐦
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              💼
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              📸
            </a>
          </div>
        </div>
      </div>
      <div className="mt-10 text-center text-sm text-gray-500">
        © 2025 Startup Marketplace. All rights reserved.
      </div>
    </footer>
  );
}
