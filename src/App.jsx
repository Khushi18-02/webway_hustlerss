import React from 'react';
import './main.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";


// Pages - Using correct import paths matching your folder structure
import LandingPage from './pages/LandingPage.jsx';
import Login from './pages/login.jsx';
import StudentDashboard from "./pages/student/StudentDashboard.jsx";
import AdminDashboard from "./pages/admin/AdminDashboard.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing Page - Root Route */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Login Page */}
        <Route path="/login" element={<Login />} />
        
        {/* Student Routes */}
        
         <Route path="/student" element={<StudentDashboard />} />
        <Route path="/student/events" element={<h1>Student Events</h1>} />
        <Route path="/student/certificates" element={<h1>Certificates</h1>} />
        <Route path="/student/leaderboard" element={<h1>Leaderboard</h1>} />
       
        {/* Admin Routes */}

        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/users" element={<h1>Manage Users</h1>} />
        <Route path="/admin/events" element={<h1>Manage Events</h1>} />
        <Route path="/admin/analytics" element={<h1>Analytics</h1>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;