// src/components/EnhancedFooter.jsx

import React, { useState } from "react";

const EnhancedFooter = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <footer
      onMouseMove={handleMouseMove}
      className="bg-black text-gray-300 py-20 relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About Section */}
          <div>
            <h2 className="text-white text-4xl font-extrabold mb-8">FLUX.1</h2>
            <p className="text-lg leading-relaxed">
              We are dedicated to providing the best AI solutions and services.
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h2 className="text-white text-4xl font-extrabold mb-8">Quick Links</h2>
            <ul className="space-y-4">
              <li><a href="/" className="hover:text-red-500 text-2xl">Home</a></li>
              <li><a href="/about" className="hover:text-red-500 text-2xl">About</a></li>
              <li><a href="/services" className="hover:text-red-500 text-2xl">Services</a></li>
              <li><a href="/contact" className="hover:text-red-500 text-2xl">Contact</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className="text-white text-4xl font-extrabold mb-8">Contact</h2>
            <p className="text-lg mb-4">Email: FLUX.1@aitech.com</p>
            <p className="text-lg mb-8">Phone: +1 (555) 123-4567</p>
          </div>
        </div>
        <div className="mt-10 text-center text-gray-500">
          <p className="text-xl">© {new Date().getFullYear()} FLUX.1 Tech. All rights reserved.</p>
        </div>
      </div>

      {/* Background Animations */}
      <div
        className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-r from-red-600 to-black rounded-full opacity-40 blur-2xl transform -translate-x-1/3 -translate-y-1/3 pointer-events-none"
        style={{
          transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)`,
        }}
      ></div>
      <div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-r from-black to-red-600 rounded-full opacity-60 blur-3xl transform translate-x-1/4 translate-y-1/4 pointer-events-none"
        style={{
          transform: `translate(${mousePosition.x * -0.09}px, ${mousePosition.y * -0.07}px)`,
        }}
      ></div>
    </footer>
  );
};

export default EnhancedFooter;
