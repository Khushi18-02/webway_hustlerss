import React from 'react';
import './main.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages and layouts
import LandingPage from './pages/LandingPage.jsx';
import Login from './pages/login.jsx';
import StudentDashboard from "./pages/student/StudentDashboard.jsx";
import AdminDashboard from "./pages/admin/AdminDashboard.jsx";
import DefaultLayout from "./layouts/DefaultLayout.jsx";

// Wrapper to render pages with or without layout
const WithLayout = ({ element }) => (
  <DefaultLayout>{element}</DefaultLayout>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login Page - NO layout */}
        <Route path="/login" element={<Login />} />

        {/* Landing Page - WITH layout */}
        <Route path="/" element={<WithLayout element={<LandingPage />} />} />

        {/* Student Routes - WITH layout */}
        <Route path="/student" element={<WithLayout element={<StudentDashboard />} />} />
        <Route path="/student/dashboard" element={<WithLayout element={<StudentDashboard />} />} />
        {/* ... other student routes ... */}

        {/* Admin Routes - WITH layout */}
        <Route path="/admin" element={<WithLayout element={<AdminDashboard />} />} />
        <Route path="/admin/dashboard" element={<WithLayout element={<AdminDashboard />} />} />
        {/* ... other admin routes ... */}

        {/* Fallback 404 - no layout */}
        <Route path="*" element={
          <div className="container mx-auto px-4 py-8 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">404 - Page Not Found</h1>
            <p className="text-gray-600 mb-8">The page you're looking for doesn't exist.</p>
            <a href="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Go Home
            </a>
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
