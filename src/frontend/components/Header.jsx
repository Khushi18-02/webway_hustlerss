import React from "react";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="w-full glass flex items-center justify-between px-6 py-4 z-10">
      {/* Left: Logo + College name */}
      <div className="flex items-center space-x-4 min-w-fit">
        <img
          src={logo}
          alt="Cummins College Logo"
          className="w-12 h-12 object-contain"
        />
        <div className="flex flex-col leading-tight">
          <span className="text-lg font-semibold text-white select-none">
            MKSSS Cummins College Of Engineering
          </span>
          <span className="text-sm text-white/80 select-none">
            for Women, Nagpur
          </span>
        </div>
      </div>

      {/* Right: EduTech + Tagline aligned to right */}
      <div className="flex items-center space-x-4 text-right ml-auto">
        <h1 className="text-white font-bold text-2xl md:text-3xl drop-shadow-lg whitespace-nowrap">
          EduTech
        </h1>
        <span className="text-sm md:text-base text-white/80 whitespace-nowrap">
          Your Gateway to Extracurricular Excellence
        </span>
      </div>
    </header>
  );
}

