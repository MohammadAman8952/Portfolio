import React from 'react';
import profile_img from '../../assets/AMAN_final.png';

function Hero() {
  return (
    <div id="hero" className="flex flex-col items-center text-center px-4 py-10 md:py-20 bg-black">

      {/* Profile Image */}
     <img
        src={profile_img}
        alt="Aman"
        className="w-40 h-40 rounded-full object-cover mb-6 shadow-md 
                  transition-all duration-300 hover:scale-105 
                  hover:shadow-[0_0_30px_#9333EA]"
/>


      {/* Title */}
      <h1 className="text-2xl text-white md:text-4xl font-bold mb-4">
        <span className="text-purple-600">I'm Mohammad Aman</span>, Front-End Developer
      </h1>

      {/* Description */}
      <p className="text-white max-w-xl mb-8 ">
        I'm a full-stack developer skilled in React, Tailwind, HTML, CSS, JavaScript,
        Node.js, and Express.js. I enjoy building clean, responsive, and user-friendly web applications.
      </p>

      {/* Action Buttons */}
      <div className="flex gap-4">
        <button className="px-6 py-2 rounded-lg bg-gradient-to-r from-[#DF8908] via-purple-500 to-[#B415FF] text-white font-semibold hover:opacity-90 transition">
          <a href="#contact" className="hover:text-purple-400">Connect With Me</a>
        </button>
        <button className="px-6 py-2 rounded-lg border border-purple-500 text-purple-700 font-semibold hover:bg-purple-100 transition">
          <a href="https://drive.google.com/file/d/1nAb3zmAPw7s4Jtsf5xD4--gI1NbQcdrJ/view?usp=sharing">My Resume</a>
        </button>
      </div>
      
    </div>
  );
}

export default Hero;
