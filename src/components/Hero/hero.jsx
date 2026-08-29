
import './hero.css'
import React from 'react'
import profil from '../../assets/image/image porfolioi.png'
import code from '../../assets/image/ligne.code.png'
export default function hero() {
  return (
    <div id='home'>
        

        <div className="hertext" data-aos="fade-right" >
            <p className='p1'>Bonjour, je suis<br />
                <span id="spanone" style={{background: 'linear-gradient( 90deg, #008fc7, #c31bda )',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent', fontSize: '1.8rem',
                    fontWeight: '700', letterSpacing: '1.7px'}} >
                    Fréjus KPADONOU
                </span> <br />
            </p>
            <p className='p2'>
                Développeur Web  <span className="span2" style={{background: 'linear-gradient( 90deg, #008fc7, #c31bda)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent', fontSize: '0.9rem',
                    fontWeight: '700'}}>
                        Full-Stack
                </span>
            </p>
            <small className='small1' style={{fontSize: '0.8rem', lineHeight: '1.6', color: 'var(--small)'}}>
                Je conçois et développe des applications web modernes <br /> 
                et performantes avec des technologies de pointe. <br />
                Passionné par le code, l'apprentissage et les défis.
            </small>
            
            <div className="herbutton">
                <button className='button1'><a href="#projects">Voir mes projets</a><i className="fa-solid fa-arrow-right"></i></button>
                <button className='button2'><a href="#contact">Me contacter</a></button>
            </div>
            <div className="hersocial">
                <a href="https://github.com/frejus-codetech" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a>
                <a href="https://www.linkedin.com/in/fréjus-kpadonou-2a2b05399?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-square-linkedin"></i></a>
                <a href='https://mail.google.com/mail/?view=cm&fs=1&to=frejus@gmail.com&su=Contact%20depuis%20mon%20portfolio' target='blank' rel="noopener noreferrer"><i className="fa-regular fa-envelope"></i></a>
                <a href="https://www.facebook.com/fre.jus.806195" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook-f"></i></a>
            </div>
        </div>
        
        <div className="herimage" data-aos="fade-left"> 
            <div className='circle'>
                <img src={profil} alt=""/>
            </div> 
            
        </div> 
    </div>
  )
}
