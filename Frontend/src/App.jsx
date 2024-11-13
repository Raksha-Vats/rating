import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/register.jsx';
import Login from './pages/login.jsx';
import Dashboard from './pages/dashboard.jsx';
import Rating from './pages/college_rating.jsx';



function App() {
  return (
    <Router>
      <div className="content">
        <Routes>
          <Route path="/register" element={<Register />} />
        </Routes>
        <Routes>
          <Route path="/login" element={<Login/>} />
        </Routes>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Routes>
          <Route path="/college_rating" element={<Rating />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
