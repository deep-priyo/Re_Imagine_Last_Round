// src/components/Navbar.js

import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-transparent  text-white p-4 fixed w-full top-0 left-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          Flux.1
        </div>
        <ul className="flex space-x-16">
          <li><a href="#home" className="hover:underline">Apps</a></li>
          <li><a href="#services" className="hover:underline">Models</a></li>
          <li><a href="#about" className="hover:underline">Threads</a></li>
          <li><a href="#contact" className="hover:underline">Articels</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
