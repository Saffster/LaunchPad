import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../utils/supabaseClient'
import Filters from '../components/Filters'

export default function Explore() {
  const [ideas, setIdeas] = useState([])
  const [filters, setFilters] = useState({ categories: [], rating: 'All', stage: 'All Stages' })
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const perPage = 6

  useEffect(() => {
    const fetchIdeas = async () => {
      const { data, error } = await supabase.from('ideas').select('*')
      if (error) console.error('Error fetching ideas:', error)
      else setIdeas(data)
    }
    fetchIdeas()
  }, [])

  const searchMatch = (idea) =>
    idea.title.toLowerCase().includes(search.toLowerCase()) ||
    idea.description.toLowerCase().includes(search.toLowerCase())

  const filteredIdeas = ideas
    .filter(idea => {
      const categoryMatch = filters.categories.length === 0 || filters.categories.includes(idea.category)
      const ratingMatch =
        filters.rating === 'All' ||
        (filters.rating === '4+' && idea.rating >= 4) ||
        (filters.rating === '3+' && idea.rating >= 3) ||
        (filters.rating === '2+' && idea.rating >= 2)
      return categoryMatch && ratingMatch
    })
    .filter(searchMatch)

  const paginatedIdeas = filteredIdeas.slice((page - 1) * perPage, page * perPage)

  return (
    <div className="flex gap-8 p-8">
      <Filters onFilterChange={setFilters} />

      <div className="flex-1">
        <h2 className="text-2xl font-semibold mb-4">Explore Startup Ideas</h2>

        <input
          type="text"
          placeholder="Search ideas..."
          className="mb-4 p-2 border rounded w-full max-w-md"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {paginatedIdeas.map((idea) => (
            <Link
              to={`/ideas/${idea.id}`}
              key={idea.id}
              className="bg-white rounded-lg p-4 shadow hover:shadow-md transition duration-200 text-black no-underline"
            >
              <span className={`text-xs font-medium px-2 py-1 rounded text-white ${
                getCategoryColor(idea.category)
              }`}>
                {idea.category}
              </span>
              <h3 className="mt-2 text-lg font-bold">{idea.title}</h3>
              <p className="text-sm text-gray-600">{idea.description}</p>
            </Link>
          ))}
        </div>

        <div className="mt-6">
          {Array.from({ length: Math.ceil(filteredIdeas.length / perPage) }, (_, i) => (
            <button
              key={i}
              className={`mx-1 px-3 py-1 rounded text-sm ${
                page === i + 1 ? 'bg-blue-600 text-white' : 'bg-gray-200'
              }`}
              onClick={() => setPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
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