import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { supabase } from '../utils/supabaseClient'

export default function IdeaDetail() {
  const { id } = useParams()
  const [idea, setIdea] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchIdea = async () => {
      const { data, error } = await supabase.from('ideas').select('*').eq('id', id).single()
      if (error) setError('Idea not found')
      else setIdea(data)
    }
    fetchIdea()
  }, [id])

  if (error) return <h2>{error}</h2>
  if (!idea) return <p>Loading...</p>

  return (
    <div style={{ padding: '2rem' }}>
      <span style={{
        padding: '4px 8px',
        backgroundColor: getCategoryColor(idea.category),
        color: 'white',
        borderRadius: '6px',
        fontSize: '0.75rem'
      }}>
        {idea.category}
      </span>

      <h1 style={{ marginTop: '1rem' }}>{idea.title}</h1>
      <p style={{ fontSize: '1.1rem' }}>{idea.description}</p>
      <p style={{ fontWeight: 'bold' }}>ID: {idea.id}</p>
    </div>
  )
}

function getCategoryColor(category) {
  switch (category) {
    case 'Technology': return '#3B82F6'
    case 'Healthcare': return '#10B981'
    case 'Finance': return '#8B5CF6'
    case 'Education': return '#F59E0B'
    default: return '#6B7280'
  }
}