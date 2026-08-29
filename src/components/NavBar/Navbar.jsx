import { useState } from 'react';
import React from 'react'
import './NavBar.css'
import curriculum from '../../assets/document/CV_Porfolio.pdf'

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
        liste.addEventListener('click', ()=>{
            if(liste){luste.classList.remove('redd');}
            
            menu.classList.remove('croix');
        })
    })

    
}

function Navbar({darkMode, setDarkMode}) {
    const [menuOpen, setMenuOpen] = useState(true);

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

        <div className="menu" onClick={handleClick}></div>

        <div className="navlink"  >
           <nav>    
                <ul className='navigator'>
                    <li><a href="#home" onClick={Handlechange}>Home</a></li>
                    <li><a href="#about" onClick={Handlechange}>About</a></li>
                    <li><a href="#Parcours" onClick={Handlechange}>Journey</a></li>
                    <li><a href="#skills" onClick={Handlechange}>Skills</a></li>    
                    <li><a href="#projects" onClick={Handlechange}>Projects</a></li>
                           <li><a href="#contact" onClick={Handlechange}>Contact</a></li> 
                </ul>
           </nav>
        
        </div>
        
        
      
    </div>
  )
}

export default Navbar


