// src/components/Footer.jsx
import React from "react";
import { FaInstagram, FaLinkedin, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1a2238] text-white py-10 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-32">
        {/* About Us */}
        <div className="md:w-1/2">
          <h2 className="text-lg font-bold mb-3">About Us</h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            MKSSS’s Cummins College of Engineering for Women, Nagpur is dedicated to empowering students through education and holistic development. This portal supports co-curricular and extra-curricular initiatives, providing recognition and opportunities to excel beyond academics.
          </p>
        </div>

        {/* Contact & Socials */}
        <div className="md:w-1/2">
          <h2 className="text-lg font-bold mb-3">Contact Us</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>📍 Hingna Road, Nagpur – 440019</li>
            <li>✉️ activities@cumminscollege.in</li>
            <li>📞 +91 712-2223403, 2220202</li>
          </ul>

          <div className="mt-4">
            <h3 className="font-semibold mb-2">Follow Us On</h3>
            <div className="flex space-x-6 text-2xl text-white">
              <a href="https://www.instagram.com/ccoewnagpur" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-pink-500 transition">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/in/ccoew-nagpur-1979b5162?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-600 transition">
                <FaLinkedin />
              </a>
              <a href="https://www.facebook.com/CCOEWNAGPUR" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-blue-500 transition">
                <FaFacebook />
              </a>
              <a href="https://twitter.com/ccoewnagpur" target="_blank" rel="noopener noreferrer" aria-label="X Twitter" className="hover:text-sky-400 transition">
                <FaTwitter />
              </a>
              <a href="https://www.youtube.com/@cumminscollegeofengineerin3460" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-red-600 transition">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Info */}
      <div className="mt-10 text-center text-sm text-gray-400">
        <p className="mb-1 select-none">
          © {new Date().getFullYear()} EduTech | Cummins College of Engineering for Women, Nagpur
        </p>
        <p className="text-xs text-gray-300 select-none">
          Designed for extra-curricular engagement & recognition
        </p>
      </div>
    </footer>
  );
}
