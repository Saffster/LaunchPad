import IdeaCard from "./IdeaCard";

const ideas = [
  {
    id: 1,
    title: "VR Classroom Platform",
    description:
      "Immersive virtual reality classrooms for remote education with interactive 3D models and collaborative tools.",
    category: "Technology",
    rating: 3.8,
    created_at: "2025-01-01T10:30:00Z",
    comments: 8,
    author: {
      name: "Emma Wilson",
      avatar:
        "https://ui-avatars.com/api/?name=Emma+Wilson&background=3b82f6&color=fff",
    },
  },
  {
    id: 2,
    title: "Sustainable Marketplace",
    description:
      "A curated marketplace for eco-friendly products with verified sustainability metrics and carbon offset options.",
    category: "E-commerce",
    rating: 4.5,
    created_at: "2024-12-27T08:15:00Z",
    comments: 19,
    author: {
      name: "James Peterson",
      avatar:
        "https://ui-avatars.com/api/?name=James+Peterson&background=10b981&color=fff",
    },
  },
  {
    id: 3,
    title: "No-Code IoT Platform",
    description:
      "A drag-and-drop interface for creating IoT applications without programming knowledge.",
    category: "Technology",
    rating: 4.1,
    created_at: "2025-01-03T16:45:00Z",
    comments: 12,
    author: {
      name: "Lisa Nguyen",
      avatar:
        "https://ui-avatars.com/api/?name=Lisa+Nguyen&background=8b5cf6&color=fff",
    },
  },
  {
    id: 4,
    title: "AI-Powered Marketing",
    description:
      "Revolutionize digital marketing with AI-driven personalization and analytics that help businesses reach their target audience more effectively.",
    category: "Technology",
    rating: 4.7,
    created_at: "2025-01-15T14:20:00Z",
    comments: 24,
    author: {
      name: "Alex Chen",
      avatar:
        "https://ui-avatars.com/api/?name=Alex+Chen&background=3b82f6&color=fff",
    },
  },
  {
    id: 5,
    title: "Personalized Nutrition",
    description:
      "Create custom meal plans and nutrition tracking based on individual health data, dietary preferences, and fitness goals.",
    category: "Healthcare",
    rating: 4.2,
    created_at: "2025-01-14T11:00:00Z",
    comments: 15,
    author: {
      name: "Dr. Sarah Kim",
      avatar:
        "https://ui-avatars.com/api/?name=Sarah+Kim&background=10b981&color=fff",
    },
  },
  {
    id: 6,
    title: "Blockchain-Based",
    description:
      "Decentralized financial platform offering secure, transparent transactions and smart contract capabilities for modern banking.",
    category: "Finance",
    rating: 4.9,
    created_at: "2025-01-10T09:30:00Z",
    comments: 31,
    author: {
      name: "Michael Rodriguez",
      avatar:
        "https://ui-avatars.com/api/?name=Michael+Rodriguez&background=8b5cf6&color=fff",
    },
  },
];

export default function FeaturedIdeasGrid() {
  return (
    <div className="space-y-6">
      {/* Header with view toggle */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">
          Featured Startup Ideas
        </h2>
        <div className="flex items-center gap-2">
          <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
            </svg>
          </button>
          <button className="p-2 text-blue-600 bg-blue-50 rounded-lg">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 10h16M4 14h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Ideas Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {ideas.map((idea) => (
          <IdeaCard key={idea.id} idea={idea} />
        ))}
      </div>
    </div>
  );
}
