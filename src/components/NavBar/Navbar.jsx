import { useState } from 'react';
import React from 'react'
import './NavBar.css'
import curriculum from '../../assets/document/CV-Myportfolio.pdf'

function handleClick(){
    let menu = document.querySelector('.menu');
    let luste = document.querySelector('.navlink');
    let list = document.querySelectorAll('li');
    
     menu.onclick = function() {
        menu.classList.toggle('croix');
        luste.classList.toggle('redd');
    }
}

function Handlechange(){
    let list = document.querySelectorAll('li');
    let luste = document.querySelector('.navlink');
    let menu = document.querySelector('.menu');
    list.forEach(liste => {
        liste.onclick = function() {
            if(liste){luste.classList.remove('redd');}
            
            menu.classList.remove('croix');
        }
    }

    
    )}

function Navbar({darkMode, setDarkMode}) {
    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div id="Navbar">
        <div className="navlogo">
            <h1>Fréjus<span>●</span></h1>
        </div>

        <div className="navbutton">
            
            <button className="download">
                <i style={{color: '#4567fd'}} className="fa-solid fa-download"></i>
                <a href ={curriculum}  target='bank'>Download CV</a> 
                
            </button>
            <button className="theme-toggle" onClick={() =>setDarkMode(!darkMode)}><i className="fa-regular fa-moon"></i></button>
        </div>

        <div className = {menuOpen ? "menu croix" : "menu"} onClick={() => setMenuOpen(!menuOpen)}></div>

        <div className = {menuOpen ? "navlink redd" : "navlink"}>
           <nav>    
                <ul className='navigator'>
                    <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
                    <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
                    <li><a href="#Parcours" onClick={() => setMenuOpen(false)}>Journey</a></li>
                    <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>    
                    <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
                           <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li> 
                </ul>
           </nav>
        
        </div>
        
        
      
    </div>
  )
}

export default Navbar


