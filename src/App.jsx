import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Chatcraze from './pages/Chatcraze'

function App() {
  return (
    <Router>
      <div className="antialiased font-sans">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chatcraze" element={<Chatcraze />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
