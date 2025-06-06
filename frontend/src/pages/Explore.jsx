import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import { Link } from "react-router-dom";

export default function Explore() {
  const [ideas, setIdeas] = useState([]);
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  useEffect(() => {
    fetchIdeas();
  }, []);

  const fetchIdeas = async () => {
    const { data, error } = await supabase
      .from("ideas")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Failed to load ideas:", error);
    } else {
      setIdeas(data);
    }
  };

  const filteredIdeas = ideas.filter((idea) => {
    return (
      idea.title.toLowerCase().includes(search.toLowerCase()) &&
      (categoryFilter ? idea.category === categoryFilter : true)
    );
  });

  const categories = ["Technology", "Healthcare", "Finance", "Education", "E-commerce"];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">Explore Startup Ideas</h1>

      {/* Filters */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4">
        <input
          type="text"
          placeholder="Search startup ideas..."
          className="w-full md:w-1/2 p-3 border rounded"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="w-full md:w-auto p-3 border rounded"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {/* Idea Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredIdeas.map((idea) => (
          <Link to={`/idea/${idea.id}`} key={idea.id} className="block">
            <div className="bg-white p-5 rounded shadow hover:shadow-md transition">
              <span className="inline-block px-3 py-1 text-sm font-semibold bg-blue-100 text-blue-600 rounded-full mb-2">
                {idea.category}
              </span>
              <h2 className="text-xl font-bold mb-2">{idea.title}</h2>
              <p className="text-gray-600 mb-4 line-clamp-3">{idea.description}</p>
              <div className="text-yellow-500 text-sm font-medium">⭐ {idea.rating ?? "N/A"}</div>
            </div>
          </Link>
        ))}
      </div>

      {filteredIdeas.length === 0 && (
        <div className="text-center text-gray-500 mt-10">No matching ideas found.</div>
      )}
    </div>
  );
}
