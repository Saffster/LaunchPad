export default function SearchAndSortBar() {
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
      <input
        type="text"
        placeholder="Search startup ideas..."
        className="flex-1 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <select className="px-4 py-2 rounded border border-gray-300">
        <option>All Categories</option>
        <option>Technology</option>
        <option>Healthcare</option>
        <option>Finance</option>
        <option>Education</option>
        <option>E-commerce</option>
      </select>
      <select className="px-4 py-2 rounded border border-gray-300">
        <option>Sort By</option>
        <option>Newest</option>
        <option>Top Rated</option>
      </select>
    </div>
  );
} 