import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { supabase } from '../utils/supabaseClient'

export default function Navbar() {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user))
  }, [])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    window.location.href = '/login'
  }

  return (
    <nav className="bg-white shadow-md px-4 py-3 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-lg font-bold text-indigo-600">🚀 Startup Marketplace</Link>

        <div className="flex gap-4 items-center text-sm font-medium">
          <Link to="/explore" className="hover:text-indigo-600">Explore</Link>
          <Link to="/dashboard" className="hover:text-indigo-600">Dashboard</Link>
          {user && (
            <Link to="/post" className="hover:text-indigo-600">Post</Link>
          )}
          {user ? (
            <button onClick={handleLogout} className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition">Logout</button>
          ) : (
            <>
              <Link to="/login" className="px-3 py-1 rounded hover:text-indigo-600">Login</Link>
              <Link to="/register" className="bg-indigo-600 text-white px-3 py-1 rounded-md hover:bg-indigo-700 transition">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}