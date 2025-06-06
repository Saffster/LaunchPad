import { useState } from "react";
import { supabase } from "../supabaseClient";
import { useNavigate } from "react-router-dom";

export default function PostIdea() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Technology");
  const [rating, setRating] = useState(0);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = await supabase.auth.getUser();
    const userId = user.data?.user?.id;

    const { error } = await supabase.from("ideas").insert([
      {
        title,
        description,
        category,
        rating,
        user_id: userId,
      },
    ]);

    if (error) {
      alert("Error posting idea: " + error.message);
    } else {
      alert("Idea posted!");
      navigate("/explore");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Share Your Startup Idea 🚀</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full p-3 border rounded"
          />
          <textarea
            placeholder="Describe your idea..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="w-full p-3 border rounded h-32"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-3 border rounded"
          >
            <option>Technology</option>
            <option>Healthcare</option>
            <option>Finance</option>
            <option>Education</option>
            <option>E-commerce</option>
          </select>
          <input
            type="number"
            placeholder="Rating (1-5)"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            className="w-full p-3 border rounded"
            min="1"
            max="5"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
          >
            Submit Idea
          </button>
        </form>
      </div>
    </div>
  );
}
