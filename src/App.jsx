import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Project1 from './pages/Project1'

function App() {
  return (
    <Router>
      <div className="antialiased font-sans">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chatcraze" element={<Project1 />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
