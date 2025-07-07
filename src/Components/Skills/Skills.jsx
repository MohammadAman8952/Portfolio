import React, { useState } from "react";

// Skill categories
const categories = ["All", "Languages", "Frontend", "Backend", "Database"];

// Skill data using only images
const skills = [
  { name: "Python", icon: "/icons/python.png", category: "Languages" },
  { name: "Java", icon: "/icons/java.png", category: "Languages" },
  { name: "HTML", icon: "/icons/html.png", category: "Frontend" },
  { name: "CSS", icon: "/icons/css.png", category: "Frontend" },
  { name: "JavaScript", icon: "/icons/js.png", category: "Frontend" },
  { name: "React", icon: "/icons/react.png", category: "Frontend" },
  { name: "Tailwind", icon: "/icons/tailwind.png", category: "Frontend" },
  { name: "Node.js", icon: "/icons/node.png", category: "Backend" },
  { name: "MongoDB", icon: "/icons/mongodb.png", category: "Database" },
];

function Skills() {
  const [selected, setSelected] = useState("All");

  // Filter skills by selected category
  const filteredSkills =
    selected === "All"
      ? skills
      : skills.filter((skill) => skill.category === selected);

  return (
   <div id="skills" className="bg-black  w-full p-6 py-[90px]">
     <div className="flex justify-center w-full">
  <h2 className="mb-6 text-4xl font-bold text-white w-[80%] text-center
                  decoration-purple-500 
                 transform transition-all duration-300 hover:scale-105 
                 hover:shadow-[0_0_25px_#9333EA]  ">
    My <span className="text-purple-400">Skills</span>
  </h2>
</div>




      {/* Category buttons */}
      <div className="flex justify-center gap-3 flex-wrap mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`px-4 py-1 rounded-full font-medium ${
              selected === cat ? "bg-purple-600 text-white" : "bg-white border"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 max-w-4xl mx-auto">
        {filteredSkills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-3 bg-black text-white border p-3 rounded-xl 
                      shadow-md transition-all duration-300 hover:scale-105 
                      hover:shadow-[0_0_35px_#D966FF]"
          >
            {/* <img src={skill.icon} alt={skill.name} className="w-8 h-8" /> */}
            <span className="font-medium">{skill.name}</span>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Skills;
