import React from 'react';
import './main.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import pages and layout
import LandingPage from './pages/LandingPage.jsx';
import Login from './pages/login.jsx';
import DefaultLayout from "./layouts/DefaultLayout.jsx";

function App() {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <Routes>
          {/* Landing Page - Root Route */}
          <Route path="/" element={<LandingPage />} />
          
          {/* Login Page */}
          <Route path="/login" element={<Login />} />
          
        </Routes>
      </DefaultLayout>
    </BrowserRouter>
  );
}

export default App;