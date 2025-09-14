import React from 'react';
import './main.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import LandingPage from './pages/LandingPage.jsx';
import Login from './pages/login.jsx';
import AdminDashboard from './pages/admin/AdminDashboard.jsx';
import StudentDashboard from './pages/student/StudentDashboard.jsx';

// Layout
import DefaultLayout from "./layouts/DefaultLayout.jsx";

function App() {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <Routes>
          {/* Landing Page */}
          <Route path="/" element={<LandingPage />} />

          {/* Login Page */}
          <Route path="/login" element={<Login />} />

          {/* Admin Dashboard */}
          <Route path="/admin" element={<AdminDashboard />} />

          {/* Student Dashboard */}
          <Route path="/student" element={<StudentDashboard />} />
        </Routes>
      </DefaultLayout>
    </BrowserRouter>
  );
}

export default App;
