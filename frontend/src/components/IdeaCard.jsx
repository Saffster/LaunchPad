import { Link } from "react-router-dom";

const categoryColors = {
  Technology: "bg-blue-500",
  Healthcare: "bg-emerald-500",
  Finance: "bg-purple-500",
  Education: "bg-amber-500",
  "E-commerce": "bg-pink-500",
};

export default function IdeaCard({ idea }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 1) return "1 day ago";
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 14) return "1 week ago";
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    return date.toLocaleDateString();
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all duration-200 overflow-hidden">
      <div className="p-6">
        {/* Category Badge */}
        <div className="flex items-center justify-between mb-4">
          <span
            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold text-white ${
              categoryColors[idea.category] || "bg-gray-500"
            }`}
          >
            {idea.category}
          </span>
          <div className="flex items-center gap-1 text-amber-400">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
            <span className="text-sm font-semibold text-gray-700">
              {idea.rating}
            </span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 leading-tight">
          {idea.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed">
          {idea.description}
        </p>

        {/* Meta info */}
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <span>Posted {formatDate(idea.created_at)}</span>
          <span>{idea.comments || 0} comments</span>
        </div>

        {/* Author and Action */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src={
                idea.author?.avatar ||
                `https://ui-avatars.com/api/?name=${encodeURIComponent(idea.author?.name || "User")}&background=3b82f6&color=fff`
              }
              alt={idea.author?.name}
              className="w-8 h-8 rounded-full"
            />
            <span className="text-sm font-medium text-gray-700">
              {idea.author?.name}
            </span>
          </div>
          <Link
            to={`/idea/${idea.id}`}
            className="text-blue-600 hover:text-blue-700 font-medium text-sm hover:underline"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
