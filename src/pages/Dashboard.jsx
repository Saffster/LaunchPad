import { useEffect, useState } from 'react'
import { supabase } from '../utils/supabaseClient'
import { useNavigate } from 'react-router-dom'

export default function Dashboard() {
  const [ideas, setIdeas] = useState([])
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchIdeas = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user)

      if (user) {
        const { data, error } = await supabase
          .from('ideas')
          .select('*')
          .eq('user_id', user.id)

        if (!error) setIdeas(data)
      }
    }
    fetchIdeas()
  }, [])

  const handleDelete = async (id) => {
    const { error } = await supabase.from('ideas').delete().eq('id', id)
    if (!error) setIdeas(prev => prev.filter(i => i.id !== id))
  }

  const handleEdit = (idea) => {
    navigate('/edit', { state: { idea } })
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-6">Your Posted Ideas</h2>

      {ideas.length === 0 ? (
        <p className="text-gray-600">You haven’t posted anything yet.</p>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {ideas.map(idea => (
            <div
              key={idea.id}
              className="bg-white p-4 rounded-lg shadow hover:shadow-md transition"
            >
              <span className={`text-xs font-medium px-2 py-1 rounded text-white ${getCategoryColor(idea.category)}`}>
                {idea.category}
              </span>
              <h3 className="mt-2 text-lg font-bold">{idea.title}</h3>
              <p className="text-sm text-gray-600">{idea.description}</p>
              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => handleEdit(idea)}
                  className="flex-1 bg-blue-500 text-white py-1 rounded hover:bg-blue-600 transition text-sm"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(idea.id)}
                  className="flex-1 bg-red-500 text-white py-1 rounded hover:bg-red-600 transition text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

function getCategoryColor(category) {
  switch (category) {
    case 'Technology': return 'bg-blue-500'
    case 'Healthcare': return 'bg-green-500'
    case 'Finance': return 'bg-purple-500'
    case 'Education': return 'bg-yellow-500'
    default: return 'bg-gray-500'
  }
}
