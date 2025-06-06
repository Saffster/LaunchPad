const categories = ["Technology", "Healthcare", "Finance", "Education", "E-commerce"];

export default function FiltersSidebar() {
  return (
    <aside className="bg-white rounded-lg shadow p-6 w-full md:w-60 mb-6 md:mb-0">
      <h3 className="font-bold mb-4">Filters</h3>
      <div className="mb-4">
        <h4 className="font-semibold mb-2">Categories</h4>
        <div className="space-y-2">
          {categories.map((cat) => (
            <label key={cat} className="flex items-center gap-2">
              <input type="checkbox" className="accent-blue-600" defaultChecked={cat === "Technology" || cat === "Healthcare" || cat === "Finance"} />
              {cat}
            </label>
          ))}
        </div>
      </div>
      <div>
        <h4 className="font-semibold mb-2">Rating</h4>
        {/* Placeholder for rating filter */}
      </div>
    </aside>
  );
} 