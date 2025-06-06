const categories = [
  "Technology",
  "Healthcare",
  "Finance",
  "Education",
  "E-commerce",
];

export default function FiltersSidebar() {
  return (
    <aside className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 w-full mb-6 lg:mb-0">
      <h3 className="font-bold text-lg text-gray-900 mb-6">Filters</h3>

      {/* Categories */}
      <div className="mb-6">
        <h4 className="font-semibold text-gray-900 mb-4">Categories</h4>
        <div className="space-y-3">
          {categories.map((cat) => (
            <label
              key={cat}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                defaultChecked={
                  cat === "Technology" ||
                  cat === "Healthcare" ||
                  cat === "Finance"
                }
              />
              <span className="text-sm text-gray-700 group-hover:text-gray-900">
                {cat}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Rating */}
      <div>
        <h4 className="font-semibold text-gray-900 mb-4">Rating</h4>
        <div className="space-y-3">
          {[5, 4, 3, 2, 1].map((rating) => (
            <label
              key={rating}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="radio"
                name="rating"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
              />
              <div className="flex items-center gap-1">
                {Array.from({ length: rating }, (_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-amber-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
                <span className="text-sm text-gray-600 ml-1">& up</span>
              </div>
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
}
