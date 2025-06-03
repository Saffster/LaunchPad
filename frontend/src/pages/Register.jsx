import { useState } from 'react'
import { supabase } from '../utils/supabaseClient'
import { useNavigate } from 'react-router-dom'

export default function Register() {
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    const { error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password
    })
    if (error) setError(error.message)
    else navigate('/dashboard')
  }

  return (
    <div style={styles.container}>
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required style={styles.input} />
        <input type="password" name="password" placeholder="Password (min 6 chars)" value={formData.password} onChange={handleChange} required style={styles.input} />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit" style={styles.button}>Register</button>
      </form>
    </div>
  )
}

const styles = {
  container: {
    maxWidth: '400px', margin: '4rem auto', padding: '2rem',
    borderRadius: '12px', background: '#fff', boxShadow: '0 4px 8px rgba(0,0,0,0.05)', textAlign: 'center'
  },
  form: { display: 'flex', flexDirection: 'column', gap: '1rem' },
  input: { padding: '0.75rem', borderRadius: '8px', border: '1px solid #ccc', fontSize: '1rem' },
  button: { padding: '0.75rem', background: '#10B981', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer' }
}