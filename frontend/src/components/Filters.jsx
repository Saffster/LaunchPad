import { useState } from "react";

const categories = [
  "Technology",
  "Healthcare",
  "Finance",
  "Education",
  "E-commerce",
];
const ratings = [5, 4, 3, 2, 1];

export default function Filters({ onFiltersChange, currentFilters = {} }) {
  const [filters, setFilters] = useState({
    categories: currentFilters.categories || [],
    minRating: currentFilters.minRating || 0,
    dateRange: currentFilters.dateRange || "all",
    ...currentFilters,
  });

  const handleCategoryChange = (category) => {
    const updatedCategories = filters.categories.includes(category)
      ? filters.categories.filter((c) => c !== category)
      : [...filters.categories, category];

    const newFilters = { ...filters, categories: updatedCategories };
    setFilters(newFilters);
    onFiltersChange?.(newFilters);
  };

  const handleRatingChange = (rating) => {
    const newFilters = { ...filters, minRating: rating };
    setFilters(newFilters);
    onFiltersChange?.(newFilters);
  };

  const handleDateRangeChange = (range) => {
    const newFilters = { ...filters, dateRange: range };
    setFilters(newFilters);
    onFiltersChange?.(newFilters);
  };

  const clearFilters = () => {
    const newFilters = { categories: [], minRating: 0, dateRange: "all" };
    setFilters(newFilters);
    onFiltersChange?.(newFilters);
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-lg">Filters</h3>
        <button
          onClick={clearFilters}
          className="text-sm text-blue-600 hover:text-blue-800"
        >
          Clear All
        </button>
      </div>

      {/* Categories */}
      <div className="mb-6">
        <h4 className="font-semibold mb-3">Categories</h4>
        <div className="space-y-2">
          {categories.map((category) => (
            <label
              key={category}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={filters.categories.includes(category)}
                onChange={() => handleCategoryChange(category)}
                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
              />
              <span className="text-sm">{category}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Rating */}
      <div className="mb-6">
        <h4 className="font-semibold mb-3">Minimum Rating</h4>
        <div className="space-y-2">
          {ratings.map((rating) => (
            <label
              key={rating}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="radio"
                name="rating"
                checked={filters.minRating === rating}
                onChange={() => handleRatingChange(rating)}
                className="w-4 h-4 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm flex items-center gap-1">
                {Array.from({ length: rating }, (_, i) => (
                  <span key={i} className="text-yellow-500">
                    ★
                  </span>
                ))}
                & up
              </span>
            </label>
          ))}
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="rating"
              checked={filters.minRating === 0}
              onChange={() => handleRatingChange(0)}
              className="w-4 h-4 text-blue-600 focus:ring-blue-500"
            />
            <span className="text-sm">All Ratings</span>
          </label>
        </div>
      </div>

      {/* Date Range */}
      <div>
        <h4 className="font-semibold mb-3">Date Added</h4>
        <select
          value={filters.dateRange}
          onChange={(e) => handleDateRangeChange(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">All Time</option>
          <option value="today">Today</option>
          <option value="week">This Week</option>
          <option value="month">This Month</option>
          <option value="year">This Year</option>
        </select>
      </div>
    </div>
  );
}
