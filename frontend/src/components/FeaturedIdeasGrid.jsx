const ideas = [
  {
    title: "AI-Powered Marketing",
    category: "Technology",
    rating: 4.7,
    image: "https://placehold.co/64x64?text=AI",
  },
  {
    title: "Personalized Nutrition",
    category: "Healthcare",
    rating: 4.2,
    image: "https://placehold.co/64x64?text=Health",
  },
  {
    title: "Blockchain-Based",
    category: "Finance",
    rating: 4.9,
    image: "https://placehold.co/64x64?text=FinTech",
  },
];

const categoryColors = {
  Technology: "bg-blue-500",
  Healthcare: "bg-green-500",
  Finance: "bg-purple-500",
  Education: "bg-yellow-500",
  "E-commerce": "bg-pink-500",
};

export default function FeaturedIdeasGrid() {
  return (
    <section className="flex-1">
      <h2 className="text-2xl font-bold mb-6">Featured Startup Ideas</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {ideas.map((idea) => (
          <div key={idea.title} className="bg-white rounded-lg shadow p-4 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <img src={idea.image} alt={idea.category} className="w-8 h-8 rounded" />
              <span className={`text-xs px-2 py-1 rounded-full text-white font-semibold ${categoryColors[idea.category]}`}>{idea.category}</span>
            </div>
            <div className="font-semibold text-lg mt-2">{idea.title}</div>
            <div className="flex items-center gap-1 text-yellow-500 font-bold">
              <span>★</span>
              <span>{idea.rating}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 