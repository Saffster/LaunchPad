import { useEffect, useState } from 'react'
import { supabase } from '../utils/supabaseClient'
import IdeaCard from '../components/IdeaCard'

export default function Explore() {
  const [ideas, setIdeas] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchIdeas = async () => {
      const { data, error } = await supabase.from('ideas').select('*').order('created_at', { ascending: false })
      if (!error) setIdeas(data)
      setLoading(false)
    }

    fetchIdeas()
  }, [])

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Explore Startup Ideas</h2>
      {loading ? (
        <p className="text-center text-gray-500">Loading ideas...</p>
      ) : ideas.length === 0 ? (
        <p className="text-center text-gray-500">No ideas posted yet.</p>
      ) : (
        <div className="grid gap-6">
          {ideas.map((idea) => (
            <IdeaCard key={idea.id} idea={idea} />
          ))}
        </div>
      )}
    </div>
  )
}
