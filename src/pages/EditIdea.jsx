import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { supabase } from '../utils/supabaseClient'

export default function EditIdea() {
  const { state } = useLocation()
  const navigate = useNavigate()
  const idea = state?.idea

  const [formData, setFormData] = useState({
    title: idea?.title || '',
    description: idea?.description || '',
    category: idea?.category || ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleUpdate = async (e) => {
    e.preventDefault()
    const { error } = await supabase
      .from('ideas')
      .update({
        title: formData.title,
        description: formData.description,
        category: formData.category
      })
      .eq('id', idea.id)

    if (!error) navigate('/dashboard')
  }

  return (
    <div style={styles.container}>
      <h2>Edit Idea</h2>
      <form onSubmit={handleUpdate} style={styles.form}>
        <input type="text" name="title" value={formData.title} onChange={handleChange} required style={styles.input} />
        <textarea name="description" value={formData.description} onChange={handleChange} rows={4} required style={styles.input} />
        <select name="category" value={formData.category} onChange={handleChange} required style={styles.input}>
          <option value="">Select Category</option>
          <option value="Technology">Technology</option>
          <option value="Healthcare">Healthcare</option>
          <option value="Finance">Finance</option>
          <option value="Education">Education</option>
          <option value="E-commerce">E-commerce</option>
        </select>
        <button type="submit" style={styles.button}>Save Changes</button>
      </form>
    </div>
  )
}

const styles = {
  container: {
    maxWidth: '500px',
    margin: '4rem auto',
    padding: '2rem',
    borderRadius: '12px',
    background: '#fff',
    boxShadow: '0 4px 8px rgba(0,0,0,0.05)',
    textAlign: 'center'
  },
  form: { display: 'flex', flexDirection: 'column', gap: '1rem' },
  input: {
    padding: '0.75rem', borderRadius: '8px',
    border: '1px solid #ccc', fontSize: '1rem'
  },
  button: {
    padding: '0.75rem', background: '#3B82F6',
    color: 'white', border: 'none', borderRadius: '8px',
    fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer'
  }
}