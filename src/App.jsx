import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import PostIdea from './pages/PostIdea'
import IdeaDetail from './pages/IdeaDetail'
import Dashboard from './pages/Dashboard'
import Explore from './pages/Explore'
import Navbar from './components/Navbar'
import PrivateRoute from './components/PrivateRoute'
import EditIdea from './pages/EditIdea'
import './index.css'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/ideas/:id" element={<IdeaDetail />} />

        {/* 🔐 Protected Routes */}
        <Route
          path="/post"
          element={
            <PrivateRoute>
              <PostIdea />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
               <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/edit"
          element={
            <PrivateRoute>
                 <EditIdea />
            </PrivateRoute>
         }
        />
      </Routes>
    </Router>
  )
}

export default App