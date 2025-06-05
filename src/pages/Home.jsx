import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-6">Launch Your Startup Idea</h1>
      <p className="text-gray-600 text-lg max-w-2xl mb-8">Share your ideas, get feedback, and connect with innovators across the world.</p>
      <div className="space-x-4">
        <Link to="/explore" className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-600">Explore Ideas</Link>
        <Link to="/post" className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg text-lg hover:bg-gray-300">Post Your Idea</Link>
      </div>
    </div>
  )
}