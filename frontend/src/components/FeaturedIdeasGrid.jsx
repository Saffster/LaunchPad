import IdeaCard from "./IdeaCard";

const ideas = [
  {
    id: 1,
    title: "AI-Powered Marketing Platform",
    description:
      "Revolutionize digital marketing with AI-driven personalization and analytics that help businesses reach their target audience more effectively.",
    category: "Technology",
    rating: 4.7,
    image: "https://placehold.co/64x64?text=AI",
    created_at: "2025-01-15T10:30:00Z",
  },
  {
    id: 2,
    title: "Personalized Nutrition App",
    description:
      "Create custom meal plans and nutrition tracking based on individual health data, dietary preferences, and fitness goals.",
    category: "Healthcare",
    rating: 4.2,
    image: "https://placehold.co/64x64?text=Health",
    created_at: "2025-01-14T08:15:00Z",
  },
  {
    id: 3,
    title: "Blockchain-Based Finance Solution",
    description:
      "Decentralized financial platform offering secure, transparent transactions and smart contract capabilities for modern banking.",
    category: "Finance",
    rating: 4.9,
    image: "https://placehold.co/64x64?text=FinTech",
    created_at: "2025-01-13T16:45:00Z",
  },
  {
    id: 4,
    title: "Virtual Reality Learning Platform",
    description:
      "Immersive educational experiences using VR technology to make learning more engaging and effective for students of all ages.",
    category: "Education",
    rating: 4.5,
    image: "https://placehold.co/64x64?text=VR",
    created_at: "2025-01-12T14:20:00Z",
  },
  {
    id: 5,
    title: "Sustainable E-commerce Marketplace",
    description:
      "Online marketplace dedicated to eco-friendly products with carbon footprint tracking and sustainability scoring.",
    category: "E-commerce",
    rating: 4.3,
    image: "https://placehold.co/64x64?text=Eco",
    created_at: "2025-01-11T11:00:00Z",
  },
  {
    id: 6,
    title: "Smart Home Automation Hub",
    description:
      "Unified platform to control all smart home devices with AI-powered automation and energy efficiency optimization.",
    category: "Technology",
    rating: 4.6,
    image: "https://placehold.co/64x64?text=Smart",
    created_at: "2025-01-10T09:30:00Z",
  },
];

export default function FeaturedIdeasGrid() {
  return (
    <section className="flex-1">
      <h2 className="text-2xl font-bold mb-6">Featured Startup Ideas</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {ideas.map((idea) => (
          <IdeaCard key={idea.id} idea={idea} />
        ))}
      </div>
    </section>
  );
}
