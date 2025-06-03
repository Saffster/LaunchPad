import { useNavigate } from 'react-router-dom'

const featuredIdeas = [
  {
    id: '1',
    title: 'AI-Powered Marketing',
    description: 'Automates digital campaigns with AI.',
    category: 'Technology',
    rating: 4.7,
  },
  {
    id: '2',
    title: 'Personalized Nutrition',
    description: 'DNA-based nutrition plans.',
    category: 'Healthcare',
    rating: 4.2,
  },
  {
    id: '3',
    title: 'Blockchain Microloans',
    description: 'Smart contracts for global lending.',
    category: 'Finance',
    rating: 4.9,
  },
]

export default function Home() {
  const navigate = useNavigate()

  return (
    <div>
      {/* Hero Section */}
      <section className="text-center text-white py-20 px-4 bg-gradient-to-r from-indigo-600 to-blue-600">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Share. Collaborate. Innovate.</h1>
        <p className="text-lg md:text-xl max-w-xl mx-auto mb-6">
          The marketplace for startup ideas where entrepreneurs meet collaborators and investors.
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => navigate('/post')}
            className="bg-white text-indigo-600 px-6 py-2 rounded-md font-semibold shadow"
          >
            Post Your Idea
          </button>
          <button
            onClick={() => navigate('/explore')}
            className="border border-white text-white px-6 py-2 rounded-md font-semibold"
          >
            How It Works
          </button>
        </div>
      </section>

      {/* Featured Section */}
      <section className="p-8">
        <h2 className="text-2xl font-semibold mb-4">Featured Startup Ideas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredIdeas.map((idea) => (
            <div
              key={idea.id}
              className="bg-white p-4 rounded-lg shadow hover:shadow-md transition duration-200"
            >
              <span className={`text-xs font-medium px-2 py-1 rounded text-white ${
                getCategoryColor(idea.category)
              }`}>
                {idea.category}
              </span>
              <h3 className="mt-2 text-lg font-bold">{idea.title}</h3>
              <p className="text-sm text-gray-600">{idea.description}</p>
              <p className="mt-2 font-medium text-yellow-600">⭐ {idea.rating}</p>
            </div>
          ))}
        </div>
      </section>
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
