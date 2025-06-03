import { useState } from 'react'
import { supabase } from '../utils/supabaseClient'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) setError(error.message)
    else navigate('/dashboard')
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <h2 className="text-3xl font-bold mb-4">Login</h2>
      <form onSubmit={handleLogin} className="w-full max-w-sm space-y-4">
        <input
          className="w-full border p-2 rounded"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="w-full border p-2 rounded"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600" type="submit">
          Login
        </button>
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </form>
    </div>
  )
}
