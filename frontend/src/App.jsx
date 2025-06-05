// src/components/Navbar.jsx
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-blue-600">LaunchPad</Link>
      <div className="space-x-4">
        <Link to="/explore" className="text-gray-700 hover:text-blue-500">Explore</Link>
        <Link to="/post" className="text-gray-700 hover:text-blue-500">Post Idea</Link>
        <Link to="/dashboard" className="text-gray-700 hover:text-blue-500">Dashboard</Link>
        <Link to="/login" className="text-gray-700 hover:text-blue-500">Login</Link>
        <Link to="/register" className="text-gray-700 hover:text-blue-500">Register</Link>
      </div>
    </nav>
  );
}