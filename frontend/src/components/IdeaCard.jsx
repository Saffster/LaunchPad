import { Link } from "react-router-dom";

const categoryColors = {
  Technology: "bg-blue-500",
  Healthcare: "bg-green-500",
  Finance: "bg-purple-500",
  Education: "bg-yellow-500",
  "E-commerce": "bg-pink-500",
};

export default function IdeaCard({ idea }) {
  return (
    <Link to={`/idea/${idea.id}`} className="block">
      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
        <div className="flex items-center gap-3 mb-3">
          {idea.image && (
            <img
              src={idea.image}
              alt={idea.category}
              className="w-10 h-10 rounded-full object-cover"
            />
          )}
          <span
            className={`text-xs px-3 py-1 rounded-full text-white font-semibold ${
              categoryColors[idea.category] || "bg-gray-500"
            }`}
          >
            {idea.category}
          </span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
          {idea.title}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {idea.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-yellow-500 font-semibold">
            <span>★</span>
            <span>{idea.rating || "N/A"}</span>
          </div>

          {idea.created_at && (
            <span className="text-xs text-gray-400">
              {new Date(idea.created_at).toLocaleDateString()}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
