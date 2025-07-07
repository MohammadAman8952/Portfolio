import { useState } from "react"; // ✅ This line was missing!
import '@fortawesome/fontawesome-free/css/all.min.css';

import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Project from "./Components/Projects/Project";
import Contact from "./Components/Contacts/Contact";

function App() {
  const [count, setCount] = useState(0); // ✅ Now this won't throw error

  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    {/* <Skills/> */}
    <Project />
    <Skills/>
    <Contact/>
    </>
  );
}

export default App;
