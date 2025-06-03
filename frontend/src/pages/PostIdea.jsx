import { useState } from 'react'
import { supabase } from '../utils/supabaseClient'
import { useNavigate } from 'react-router-dom'

export default function PostIdea() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const {
      data: { user }
    } = await supabase.auth.getUser()

    const { error: insertError } = await supabase.from('ideas').insert([
      {
        title,
        description,
        user_id: user?.id || null,
        username: user?.email || 'Anonymous'
      }
    ])

    if (insertError) setError(insertError.message)
    else navigate('/explore')
  }

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Post a New Startup Idea</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full border p-3 rounded"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          className="w-full border p-3 rounded h-32"
          placeholder="Describe your idea..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600" type="submit">
          Submit Idea
        </button>
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
      </form>
    </div>
  )
}