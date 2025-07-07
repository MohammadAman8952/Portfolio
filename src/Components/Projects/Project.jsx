import React from 'react';
import random from '../../assets/Random_password.png';
import Email from '../../assets/Email.png';
import TIC from '../../assets/TIC_TOC_TOE.webp';
import Amazon from '../../assets/Amazon.jpg';
import Ecommerce from '../../assets/E-commerce.png';

function Project() {
  return (
    <div id="projects" className="min-h-screen bg-black pt-[75px] text-white">
      <h2 className="w-[80%] mx-auto mb-6 text-4xl font-bold flex justify-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_#9333EA]">
        My <span className="text-purple-400 ml-2">Projects</span>
      </h2>

      <div className="flex justify-center">
        <p className="text-center mt-3 max-w-3xl">
          Here are some of my latest projects. Each one is thoughtfully built with a focus on clean design, smooth performance, and a great user experience.
        </p>
      </div>

      <div className="py-10 flex justify-center flex-wrap items-center gap-6">

        {/* 1. Random Password Generator */}
        <div className="border border-white w-[90%] md:w-[30%] p-4 rounded-lg shadow-lg hover:shadow-white transition-transform duration-300 transform hover:scale-105 h-[545px]">
          <div className="flex justify-center items-center mb-4">
            <img className="w-[90%] h-auto md:h-[230px] rounded-md object-cover" src={random} alt="Random Password Generator" />
          </div>
          <h1 className="text-xl font-semibold text-center mb-3">Random Password Generator</h1>
          <div className="flex gap-4 mb-2">
            <h4 className="text-sm px-2 py-1 rounded-[6px] bg-purple-700">HTML & CSS</h4>
            <h4 className="text-sm px-2 py-1 rounded-[6px] bg-purple-700">JavaScript</h4>
          </div>
          <p className="text-sm text-start my-4 px-2">
            🔐 A secure tool that instantly generates strong and random passwords using JavaScript. It ensures flexibility and ease of use with a clean design and responsive layout.
          </p>
          <div className="flex justify-around">
            <button className="bg-white text-black px-4 py-1 rounded hover:bg-gray-300 transition cursor-default">
              <i className="fa-solid fa-up-right-from-square"></i>
            </button>
            <a href="https://github.com/MohammadAman8952/Random-Password-Generator" target="_blank" rel="noopener noreferrer">
              <button className="bg-white text-black px-4 py-1 rounded hover:bg-gray-300 transition">
                <i className="fa-brands fa-github"></i>
              </button>
            </a>
          </div>
        </div>

        {/* 2. Email Validator */}
        <div className="border border-white w-[90%] md:w-[30%] p-4 rounded-lg shadow-lg hover:shadow-white transition-transform duration-300 transform hover:scale-105 h-[545px]">
          <div className="flex justify-center items-center mb-4">
            <img className="w-full h-auto md:h-[220px] rounded-md object-cover" src={Email} alt="Email Validator" />
          </div>
          <h1 className="text-xl font-semibold text-center mb-3">✉️ Email Validator</h1>
          <div className="flex gap-4 mb-2">
            <h4 className="text-sm px-2 py-1 rounded-[6px] bg-purple-700">HTML & CSS</h4>
            <h4 className="text-sm px-2 py-1 rounded-[6px] bg-purple-700">JavaScript</h4>
          </div>
          <p className="text-sm text-start my-4 px-2">
            An efficient utility that checks email format validity using regular expressions. It instantly alerts users on incorrect input. The project is built with HTML, CSS, and JavaScript, focusing on functionality, responsiveness, and a clean user interface.
          </p>
          <div className="flex justify-around">
            <button className="bg-white text-black px-4 py-1 rounded hover:bg-gray-300 transition cursor-default">
              <i className="fa-solid fa-up-right-from-square"></i>
            </button>
            <a href="https://github.com/MohammadAman8952/Random-Password-Generator" target="_blank" rel="noopener noreferrer">
              <button className="bg-white text-black px-4 py-1 rounded hover:bg-gray-300 transition">
                <i className="fa-brands fa-github"></i>
              </button>
            </a>
          </div>
        </div>

        {/* 3. Tic-Tac-Toe Game */}
        <div className="border border-white w-[90%] h-auto md:w-[30%] p-4 rounded-lg shadow-lg hover:shadow-white transition-transform duration-300 transform hover:scale-105 md:h-[545px]">
          <div className="flex justify-center items-center mb-4">
            <img className="w-full  h-auto md:h-[230px] rounded-md object-cover" src={TIC} alt="Tic Tac Toe Game" />
          </div>
          <h1 className="text-xl font-semibold text-center mb-3">🎮 Tic Tac Toe</h1>
          <div className="flex gap-4 mb-2">
            <h4 className="text-sm px-2 py-1 rounded-[6px] bg-purple-700">HTML & CSS</h4>
            <h4 className="text-sm px-2 py-1 rounded-[6px] bg-purple-700">JavaScript</h4>
          </div>
          <p className="text-sm text-start my-4 px-2">
            An interactive browser-based game designed for two players to enjoy classic Tic Tac Toe. It handles turn-based logic smoothly. Built using HTML, CSS, and JavaScript, it emphasizes responsiveness, functionality, and a clean user interface.
          </p>
          <div className="flex justify-around">
            <button className="bg-white text-black px-4 py-1 rounded hover:bg-gray-300 transition cursor-default">
              <i className="fa-solid fa-up-right-from-square"></i>
            </button>
            <a href="https://github.com/MohammadAman8952/TIC-TAC-TOE-Game" target="_blank" rel="noopener noreferrer">
              <button className="bg-white text-black px-4 py-1 rounded hover:bg-gray-300 transition">
                <i className="fa-brands fa-github"></i>
              </button>
            </a>
          </div>
        </div>

        {/* 4. Amazon Clone */}
        <div className="border border-white w-[90%] md:w-[30%] p-4 rounded-lg shadow-lg hover:shadow-white transition-transform duration-300 transform hover:scale-105 h-[545px]">
          <div className="flex justify-center items-center mb-4">
            <img className="w-full h-[230px] rounded-md object-cover" src={Amazon} alt="Amazon Clone" />
          </div>
          <h1 className="text-xl font-semibold text-center mb-3">🛒 Amazon Clone</h1>
          <div className="flex gap-4 mb-2">
            <h4 className="text-sm px-2 py-1 rounded-[6px] bg-purple-700">HTML & CSS</h4>
            <h4 className="text-sm px-2 py-1 rounded-[6px] bg-purple-700">JavaScript</h4>
          </div>
          <p className="text-sm text-start my-4 px-2">
            A visually accurate clone of Amazon's homepage showcasing products and layout structure. It recreates the feel of a real shopping platform. Developed using HTML, CSS, and JavaScript with focus on responsiveness and user-friendly design.
          </p>
          <div className="flex justify-around">
            <button className="bg-white text-black px-4 py-1 rounded hover:bg-gray-300 transition cursor-default">
              <i className="fa-solid fa-up-right-from-square"></i>
            </button>
            <a href="https://github.com/MohammadAman8952/Amazon-clone-frontend" target="_blank" rel="noopener noreferrer">
              <button className="bg-white text-black px-4 py-1 rounded hover:bg-gray-300 transition">
                <i className="fa-brands fa-github"></i>
              </button>
            </a>
          </div>
        </div>

        {/* 5. E-commerce Site */}
        <div className="border border-white w-[90%] md:w-[30%] p-4 rounded-lg shadow-lg hover:shadow-white transition-transform duration-300 transform hover:scale-105 h-[545px]">
          <div className="flex justify-center items-center mb-4">
            <img className="w-full h-[230px] rounded-md object-cover" src={Ecommerce} alt="E-commerce Website" />
          </div>
          <h1 className="text-xl font-semibold text-center mb-3">🛍️ E-Commerce Website</h1>
          <div className="flex gap-4 mb-2">
            <h4 className="text-sm px-2 py-1 rounded-[6px] bg-purple-700">React JS</h4>
            <h4 className="text-sm px-2 py-1 rounded-[6px] bg-purple-700">Tailwind CSS</h4>
          </div>
          <p className="text-sm text-start my-4 px-2">
            A dynamic and responsive shopping site that features product listings and cart interaction. It offers a smooth browsing experience. The project is built using React and Tailwind CSS, with attention to modern design, speed, and usability.
          </p>
          <div className="flex justify-around">
            <button className="bg-white text-black px-4 py-1 rounded hover:bg-gray-300 transition cursor-default">
              <i className="fa-solid fa-up-right-from-square"></i>
            </button>
            <a href="https://github.com/MohammadAman8952/Random-Password-Generator" target="_blank" rel="noopener noreferrer">
              <button className="bg-white text-black px-4 py-1 rounded hover:bg-gray-300 transition">
                <i className="fa-brands fa-github"></i>
              </button>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Project;
