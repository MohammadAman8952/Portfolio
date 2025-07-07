import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // ✅ Step 1

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Navbar Container */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-2 bg-black shadow-md text-white h-[65px] w-full">
        {/* Logo / Title */}
        <h1 className="text-2xl font-bold transform transition-all hover:scale-105">
          Aman's <span className="text-purple-500">Portfolio</span>
        </h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-6 text-base font-medium">
          <li><a href="#hero" className="hover:text-purple-400 transition">Home</a></li>
          <li><a href="#about" className="hover:text-purple-400 transition">About Me</a></li>
          <li><a href="#projects" className="hover:text-purple-400 transition">My Projects</a></li>
          <li><a href="#skills" className="hover:text-purple-400 transition">Skills</a></li>
          <li><a href="#contact" className="hover:text-purple-400 transition">Contact</a></li>
        </ul>

        {/* Desktop Connect Button */}
        <div className="hidden md:block text-white font-semibold cursor-pointer px-4 py-2 rounded-lg bg-gradient-to-r from-[#DF8908] via-purple-500 to-[#B415FF] hover:opacity-90 transition">
          <a href="#contact" className="hover:text-purple-400">Connect With Me</a>
        </div>

        {/* Hamburger Icon - Mobile Only */}
        <div className="md:hidden text-3xl mr-2">
          <button onClick={toggleMenu}>&#8801;</button>
        </div>
      </div>

      {/* ✅ Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black text-white px-6 py-4 space-y-4 z-40 mt-[65px] fixed w-full shadow-lg">
          <a href="#hero" className="block hover:text-purple-400" onClick={toggleMenu}>Home</a>
          <a href="#about" className="block hover:text-purple-400" onClick={toggleMenu}>About Me</a>
          <a href="#projects" className="block hover:text-purple-400" onClick={toggleMenu}>My Projects</a>
          <a href="#skills" className="block hover:text-purple-400" onClick={toggleMenu}>Skills</a>
          <a href="#contact" className="block hover:text-purple-400" onClick={toggleMenu}>Contact</a>
        </div>
      )}
    </>
  );
};

export default Navbar;
