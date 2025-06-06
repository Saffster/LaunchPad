export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-semibold mb-2">Startup Marketplace</h3>
          <p className="text-sm">Connecting innovators with collaborators and investors to bring great ideas to life.</p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Explore</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#">Popular Ideas</a></li>
            <li><a href="#">Categories</a></li>
            <li><a href="#">Top Contributors</a></li>
            <li><a href="#">How It Works</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Company</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Stay Connected</h3>
          <p className="text-sm mb-2">Subscribe to our newsletter for the latest startup ideas and updates.</p>
          <form className="flex items-center">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 p-2 rounded-l bg-white text-gray-800"
            />
            <button className="p-2 bg-blue-500 rounded-r hover:bg-blue-600 text-white">📧</button>
          </form>
          <div className="flex gap-3 mt-4 text-lg">
            <a href="#" className="hover:text-white">🐦</a>
            <a href="#" className="hover:text-white">💼</a>
            <a href="#" className="hover:text-white">📸</a>
          </div>
        </div>
      </div>
      <div className="mt-10 text-center text-sm text-gray-500">© 2025 Startup Marketplace. All rights reserved.</div>
    </footer>
  );
}
