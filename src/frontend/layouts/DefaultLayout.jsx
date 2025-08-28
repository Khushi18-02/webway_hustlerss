import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function DefaultLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white relative">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
