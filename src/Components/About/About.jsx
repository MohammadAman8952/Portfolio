import React from 'react';
import profile from '../../assets/AMAN_final.png'; // your actual image path

const About = () => {
  return (
    <div id="about" className="bg-black text-white py-10 px-5 pt-[100px] md:px-20 ">
       <h2 className="w-[80%] mx-auto text-center mb-6 text-4xl font-bold text-white 
                     decoration-purple-500 
                    transform transition-all duration-300 hover:scale-105 
                    hover:shadow-[0_0_25px_#9333EA]">
        My <span className="text-purple-400">About Me</span>
      </h2>
      
      {/* ✅ Container with 80% Width & Centered */}
      <div className="flex flex-col md:flex-row items-center gap-10 w-[80%] mx-auto">
        
        {/* ✅ Left: Profile Image */}
        <img
          src={profile}
          alt="Aman"
          className="w-60 h-60 rounded-xl object-cover shadow-lg transfrom transition-all duration-300 z-10 hover:scale-105 hover:shadow-purple-500"
        />

        {/* ✅ Right: Content */}
        <div className="flex-1">
          {/* Intro */}
          <p className="text-lg leading-relaxed mb-6">
            I'm a passionate web developer who loves crafting responsive and dynamic web applications.
            With experience in <strong>React</strong>, <strong>Tailwind CSS</strong>, <strong>Node.js</strong>, and <strong>Express.js</strong>,
            I enjoy turning ideas into functional products. Whether it’s front-end visuals or back-end logic, 
            I’m always eager to learn and build something impactful.
          </p>

          {/* ✅ Hover Boxes - Vertical Layout */}
          <div className="flex flex-col gap-4 mb-8">
            <div className="flex items-center gap-3 bg-black text-white border p-3 rounded-xl 
                            shadow-md transition-all duration-300 hover:scale-105 
                            hover:shadow-[0_0_35px_#D966FF]">
              <p>
                I'm a <strong>DSA Enthusiast</strong> with over 200+ problems solved. I enjoy breaking down problems and finding optimal solutions.
              </p>
            </div>

            <div className="flex items-center gap-3 bg-black text-white border p-3 rounded-xl 
                            shadow-md transition-all duration-300 hover:scale-105 
                            hover:shadow-[0_0_35px_#D966FF]">
              <p>
                I have a solid understanding of <strong>OOPs concepts</strong> like inheritance, abstraction, encapsulation, and polymorphism.
              </p>
            </div>

            <div className="flex items-center gap-3 bg-black text-white border p-3 rounded-xl 
                            shadow-md transition-all duration-300 hover:scale-105 
                            hover:shadow-[0_0_35px_#D966FF]">
              <p>
                I'm always <strong>learning and exploring</strong> new technologies to grow as a full-stack developer.
              </p>
            </div>
          </div>

          {/* ✅ Stats Section */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div className="text-center transform transition-transform hover:scale-110">
              <h3 className="text-3xl font-bold text-purple-500">10+</h3>
              <p className="text-sm">Projects Completed</p>
            </div>
            <div className="text-center transform transition-transform hover:scale-110">
              <h3 className="text-3xl font-bold text-purple-500">1</h3>
              <p className="text-sm">Internship</p>
            </div>
            <div className="text-center transform transition-transform hover:scale-110">
              <h3 className="text-3xl font-bold text-purple-500">200+</h3>
              <p className="text-sm">DSA Problems</p>
            </div>
            <div className="text-center transform transition-transform hover:scale-110">
              <h3 className="text-3xl font-bold text-purple-500">OOPs</h3>
              <p className="text-sm">Strong Concepts</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
