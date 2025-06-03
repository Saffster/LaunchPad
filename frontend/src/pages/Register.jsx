import { useState } from 'react'
import { supabase } from '../utils/supabaseClient'

export default function Register() {
  console.log("Register page loaded")
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { data, error } = await supabase.auth.signUp({ email, password })
    console.log("SIGNUP:", data, error)
    if (error) setError(error.message)
    else alert("Signed up!")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 m-2"
      />
      <input
        placeholder="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 m-2"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 m-2">Register</button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  )
}