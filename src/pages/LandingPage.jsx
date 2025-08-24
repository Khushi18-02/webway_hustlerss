import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/Login');
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col relative overflow-hidden font-sans">
      
      {/* Header */}
      <header className="flex justify-between items-center p-6 text-white z-10 relative">
        {/* Left: Logo + College */}
        <div className="flex items-center space-x-3">
          <div className="flex flex-col leading-tight">
            <span className="text-lg font-semibold">Cummins College</span>
            <span className="text-sm opacity-80">for Women, Nagpur</span>
          </div>
        </div>

        {/* Center: Site Title */}
        <h1 className="absolute left-1/2 -translate-x-1/2 text-4xl font-extrabold tracking-wide drop-shadow-lg">
          EduTech
        </h1>

        {/* Right: Login */}
        <button
          onClick={handleLoginClick}
          className="px-5 py-2 glass rounded-xl text-sm font-medium hover:scale-105 transition-all duration-300"
        >
          Login
        </button>
      </header>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center text-center text-white px-6 mt-32 z-10"
      >
        <h2 className="text-6xl font-extrabold mb-6 tracking-tight drop-shadow-lg">
          Track. Engage. Excel.
        </h2>
        <p className="text-lg max-w-2xl mb-8 opacity-90">
          Your all-in-one portal for{" "}
          <span className="text-blue-400 font-semibold">Social</span>,{" "}
          <span className="text-green-400 font-semibold">Technical</span>,{" "}
          <span className="text-yellow-400 font-semibold">Cultural</span>, and{" "}
          <span className="text-pink-400 font-semibold">Sports</span> events.
          Empowering students with opportunities & recognition while simplifying event management.
        </p>

        {/* Buttons */}
        
      </motion.div>

      {/* Feature Cards */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute bottom-12 w-full flex justify-center space-x-6 z-10"
      >
        <div className="glass p-5 rounded-2xl text-white text-center w-44 hover:scale-105 transition-all duration-300">
          <h3 className="font-bold mb-1">Badges</h3>
          <p className="text-sm opacity-80">Earn recognition for achievements</p>
        </div>
        <div className="glass p-5 rounded-2xl text-white text-center w-44 hover:scale-105 transition-all duration-300">
          <h3 className="font-bold mb-1">Teams</h3>
          <p className="text-sm opacity-80">Create & join dynamic teams</p>
        </div>
        <div className="glass p-5 rounded-2xl text-white text-center w-44 hover:scale-105 transition-all duration-300">
          <h3 className="font-bold mb-1">Updates</h3>
          <p className="text-sm opacity-80">Get notified about new events</p>
        </div>
      </motion.div>
    </div>
  );
}