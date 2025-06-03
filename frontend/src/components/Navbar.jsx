import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-gray-800">LaunchPad 🚀</Link>
      <div className="space-x-4">
        <Link to="/explore" className="text-gray-700 hover:text-blue-600">Explore</Link>
        <Link to="/dashboard" className="text-gray-700 hover:text-blue-600">Dashboard</Link>
        <Link to="/post" className="text-gray-700 hover:text-blue-600">Post</Link>
        <Link to="/login" className="text-blue-500 border border-blue-500 px-3 py-1 rounded hover:bg-blue-500 hover:text-white">Login</Link>
        <Link to="/register" className="text-white bg-blue-500 px-3 py-1 rounded hover:bg-blue-600">Register</Link>
      </div>
    </nav>
  )
}