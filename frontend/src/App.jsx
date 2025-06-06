import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Login from "./pages/Login";
import Register from "./pages/Register";
import IdeaDetail from "./pages/IdeaDetail";
import About from "./pages/About";
import PostIdea from "./pages/PostIdea";
import Dashboard from "./pages/Dashboard"; // Optional if you're building a dashboard
import Categories from "./pages/Categories"; // Placeholder
import TopIdeas from "./pages/TopIdeas";     // Placeholder

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<About />} />
            <Route path="/post" element={<PostIdea />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/top" element={<TopIdeas />} />
            <Route path="/idea/:id" element={<IdeaDetail />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
