import { useState, useEffect } from 'react'
import { supabase } from '../utils/supabaseClient'
import { useNavigate } from 'react-router-dom'

export default function PostIdea() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
  })
  const [user, setUser] = useState(null)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user)
    }
    getUser()
  }, [])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    if (!user) return setError('You must be logged in to post.')

    const { error } = await supabase.from('ideas').insert([
      {
        title: formData.title,
        description: formData.description,
        category: formData.category,
        user_id: user.id
      }
    ])

    if (error) setError(error.message)
    else navigate('/dashboard')
  }

  return (
    <div className="max-w-xl mx-auto p-6 mt-8 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-4">Post a Startup Idea</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            type="text"
            name="title"
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:ring-indigo-300"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            name="description"
            rows="4"
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:ring-indigo-300"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Category</label>
          <select
            name="category"
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:ring-indigo-300"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">Select Category</option>
            <option value="Technology">Technology</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Finance">Finance</option>
            <option value="Education">Education</option>
            <option value="E-commerce">E-commerce</option>
          </select>
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition"
        >
          Submit Idea
        </button>
      </form>
    </div>
  )
}
