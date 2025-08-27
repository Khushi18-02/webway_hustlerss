// src/pages/LandingPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import collegeBg from "../assets/college-bg.png";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center relative"
      style={{ backgroundImage: `url(${collegeBg})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-md flex flex-col justify-center items-center px-4">
        <h1 className="text-5xl font-extrabold text-white mb-4 text-center">
          Track. Engage. Excel.
        </h1>
        <p className="text-center text-white max-w-3xl mb-12">
          Your all-in-one portal for{" "}
          <span className="text-blue-400">Social</span>,{" "}
          <span className="text-green-500">Technical</span>,{" "}
          <span className="text-yellow-400">Cultural</span>, and{" "}
          <span className="text-pink-500">Sports</span> events. Empowering
          students with opportunities & recognition while simplifying event
          management.
        </p>

        {/* Cards Section */}
        <div className="flex flex-col sm:flex-row gap-6 max-w-5xl w-full justify-center mb-8">
          {/* Badges Card */}
          <div className="glass btn-hover p-8 rounded-lg flex flex-col items-center text-white flex-1 text-center cursor-pointer">
            <h2 className="font-bold text-xl mb-1">Badges</h2>
            <p>Earn recognition</p>
          </div>

          {/* Teams Card */}
          <div className="glass btn-hover p-8 rounded-lg flex flex-col items-center text-white flex-1 text-center cursor-pointer">
            <h2 className="font-bold text-xl mb-1">Teams</h2>
            <p>Join dynamic teams</p>
          </div>

          {/* Updates Card */}
          <div className="glass btn-hover p-8 rounded-lg flex flex-col items-center text-white flex-1 text-center cursor-pointer">
            <h2 className="font-bold text-xl mb-1">Updates</h2>
            <p>Stay informed</p>
          </div>
        </div>

        {/* Login Button (Same Styling as Header) */}
        <button
          onClick={() => navigate("/login")}
          className="btn-hover bg-white text-gray-900 px-4 py-2 rounded-md font-semibold mt-4"
        >
          Login
        </button>
      </div>
    </div>
  );
}
