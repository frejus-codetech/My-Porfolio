import { useState , useEffect } from 'react'
import Navbar from './components/NavBar/Navbar.jsx'
import React from 'react'
import './App.css'
import Hero from './components/Hero/hero.jsx'
import About from './components/About/About.jsx'
import Parcours from './components/Parcours/Parcours.jsx'
import Skills from './components/Skills/Skills';
import Project from './components/Projects/ProjectCard.jsx'
import Contact from './components/Contact/Contact.jsx'
import Footer from './components/Footer/Footer.jsx'
import viewport from './components/viewport/viewport.jsx'

function App() {
  const [count, setCount] = useState(0)
  
  const [darkMode, setDarkMode] = useState(()=>{
    return localStorage.getItem("theme") === "dark";
  });

   console.log("darkMode :", darkMode);

  useEffect( ()=>{
    document.documentElement.classList.toggle("dark" , darkMode);

    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);
  
     

  return (
    <>
        <Navbar  darkMode={darkMode}   setDarkMode={setDarkMode} />
        <Hero />
        <About />
        <Parcours/>
        <Skills />
        <Project /> 
        <Contact/>
        <Footer/>
        <viewport/> 
    </>
  )
  

}

export default App
