import { useState } from 'react'

const categoriesList = ['Technology', 'Healthcare', 'Finance', 'Education', 'E-commerce']
const ratingList = ['4+', '3+', '2+', 'All']
const stageList = ['Ideation', 'Prototype', 'Early', 'Revenue', 'All Stages']

export default function Filters({ onFilterChange }) {
  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedRating, setSelectedRating] = useState('All')
  const [selectedStage, setSelectedStage] = useState('All Stages')

  const handleCategoryChange = (cat) => {
    const updated = selectedCategories.includes(cat)
      ? selectedCategories.filter(c => c !== cat)
      : [...selectedCategories, cat]
    setSelectedCategories(updated)
    onFilterChange({ categories: updated, rating: selectedRating, stage: selectedStage })
  }

  const handleRatingChange = (r) => {
    setSelectedRating(r)
    onFilterChange({ categories: selectedCategories, rating: r, stage: selectedStage })
  }

  const handleStageChange = (s) => {
    setSelectedStage(s)
    onFilterChange({ categories: selectedCategories, rating: selectedRating, stage: s })
  }

  return (
    <div style={{ padding: '1rem', border: '1px solid #eee', borderRadius: '10px', background: '#fff', width: '250px' }}>
      <h3>Filters</h3>

      <div>
        <strong>Categories</strong>
        {categoriesList.map(cat => (
          <div key={cat}>
            <input
              type="checkbox"
              checked={selectedCategories.includes(cat)}
              onChange={() => handleCategoryChange(cat)}
            /> {cat}
          </div>
        ))}
      </div>

      <div style={{ marginTop: '1rem' }}>
        <strong>Rating</strong>
        {ratingList.map(r => (
          <div key={r}>
            <input
              type="radio"
              name="rating"
              checked={selectedRating === r}
              onChange={() => handleRatingChange(r)}
            /> {r} Stars
          </div>
        ))}
      </div>

      <div style={{ marginTop: '1rem' }}>
        <strong>Stage</strong>
        {stageList.map(s => (
          <div key={s}>
            <input
              type="radio"
              name="stage"
              checked={selectedStage === s}
              onChange={() => handleStageChange(s)}
            /> {s}
          </div>
        ))}
      </div>
    </div>
  )
}