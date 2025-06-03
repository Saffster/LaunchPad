import { useEffect, useState } from 'react'
import { supabase } from '../utils/supabaseClient'
import { useNavigate } from 'react-router-dom'
import IdeaCard from '../components/IdeaCard'

export default function Dashboard() {
  const [ideas, setIdeas] = useState([])
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchUserIdeas = async () => {
      const {
        data: { user }
      } = await supabase.auth.getUser()
      if (!user) {
        navigate('/login')
        return
      }
      setUser(user)

      const { data, error } = await supabase
        .from('ideas')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })

      if (!error) setIdeas(data)
      setLoading(false)
    }

    fetchUserIdeas()
  }, [])

  const handleDelete = async (id) => {
    await supabase.from('ideas').delete().eq('id', id)
    setIdeas((prev) => prev.filter((idea) => idea.id !== id))
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">My Posted Ideas</h2>
      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : ideas.length === 0 ? (
        <p className="text-center text-gray-500">You haven't posted any ideas yet.</p>
      ) : (
        <div className="grid gap-6">
          {ideas.map((idea) => (
            <div key={idea.id} className="relative">
              <IdeaCard idea={idea} />
              <div className="absolute top-2 right-2 flex space-x-2">
                <button
                  onClick={() => navigate(`/edit/${idea.id}`)}
                  className="text-sm px-3 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(idea.id)}
                  className="text-sm px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
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