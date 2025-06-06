import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../supabaseClient";

export default function IdeaDetail() {
  const { id } = useParams();
  const [idea, setIdea] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    fetchIdea();
    fetchComments();
  }, []);

  const fetchIdea = async () => {
    const { data, error } = await supabase.from("ideas").select("*").eq("id", id).single();
    if (!error) setIdea(data);
  };

  const fetchComments = async () => {
    const { data, error } = await supabase
      .from("comments")
      .select("*")
      .eq("idea_id", id)
      .order("created_at", { ascending: false });
    if (!error) setComments(data);
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    const user = await supabase.auth.getUser();
    const userId = user.data?.user?.id;

    const { error } = await supabase.from("comments").insert([
      {
        idea_id: id,
        user_id: userId,
        comment_text: newComment,
      },
    ]);

    if (!error) {
      setNewComment("");
      fetchComments();
    }
  };

  if (!idea) {
    return <div className="flex justify-center items-center h-screen"><p>Loading...</p></div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="bg-white p-8 rounded shadow">
        <span className="inline-block px-3 py-1 text-sm font-semibold bg-blue-100 text-blue-600 rounded-full mb-3">
          {idea.category}
        </span>
        <h1 className="text-3xl font-bold mb-2">{idea.title}</h1>
        <p className="text-gray-700 mb-4">{idea.description}</p>
        <div className="text-yellow-500 font-medium">⭐ {idea.rating ?? "N/A"}</div>
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-bold mb-4">Comments</h2>
        {comments.length === 0 ? (
          <p className="text-gray-500">No comments yet.</p>
        ) : (
          <ul className="space-y-4">
            {comments.map((comment) => (
              <li key={comment.id} className="bg-gray-100 p-4 rounded">
                <p className="text-sm text-gray-600">{comment.comment_text}</p>
                <p className="text-xs text-gray-400 mt-1">
                  Posted on {new Date(comment.created_at).toLocaleString()}
                </p>
              </li>
            ))}
          </ul>
        )}

        <form onSubmit={handleCommentSubmit} className="mt-6 space-y-3">
          <textarea
            className="w-full p-3 border rounded"
            rows={3}
            placeholder="Leave a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            required
          ></textarea>
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
