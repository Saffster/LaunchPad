export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Your Dashboard</h1>
        <p className="text-gray-600">
          Welcome to your dashboard. From here, you can manage your posted ideas, track feedback, and interact with
          the startup community. 🚀
        </p>

        <div className="mt-6">
          <ul className="space-y-3">
            <li className="p-4 border rounded hover:bg-gray-100 transition">
              <strong className="text-blue-600">Posted Ideas:</strong> View and manage your submitted startup ideas.
            </li>
            <li className="p-4 border rounded hover:bg-gray-100 transition">
              <strong className="text-green-600">Feedback Received:</strong> Check out comments and ratings from others.
            </li>
            <li className="p-4 border rounded hover:bg-gray-100 transition">
              <strong className="text-purple-600">Profile Settings:</strong> Update your user information or log out.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
