import React from 'react'
import "./About.css"
function About() {
  return (
    <div id='about'>
        <div className='aboutha' data-aos="fade-down">
            <p style={{}}><span>●</span>À propos de mois</p>
            <h3>Qui suis-je ?</h3>
            <small>Je suis développeur web avec un intérêt <br /> particulier  pour le développement Full-Stack <br /> et la cybersécurité. <br /> <br />J'aime transformer des idées en applications <br /> modernes, performantes et sécurisées, tout <br />en cherchant constamment à approfondir <br /> mes compétences techniques.<br />
            
            </small>
            
        </div>
        <div className='containers' data-aos="fade-up">
            <div className='items item1'>
              
              <div className='Icons'>
                <div><i className="fa-solid fa-user"></i></div>
                <div>
                  <p>Nom</p>
                <small>Fréjus KPADONOU</small>
                </div>
              </div>

            </div>


            <div className='items item2'>
              <div className='Icons'>
                <div><i class="fa-solid fa-calendar-days"></i></div>
                <div>
                  <p>Âge</p>
                <small>20ans</small>
                </div>
              </div>
            </div>


            <div className='items item3'>
              <div className='Icons'>
                <div><i class="fa-solid fa-envelope"></i></div>
                <div>
                  <p>Email</p>
                <small>kpadonouf762@gmail.com</small>
                </div>
              </div>
            </div>


            <div className='items item4'>
              <div className='Icons'>
                <div><i class="fa-solid fa-location-dot"></i></div>
                <div>
                  <p>Localisation</p>
                <small>Cotonou, Bénin</small>
                </div>
              </div>
            </div>


            <div className='items item5'>
              <div className='Icons'>
                <div><i class="fa-solid fa-circle-check"></i></div>
                <div>
                  <p>Disponibilité</p>
                <small>Ouvert aux opportunités</small>
                </div>
              </div>
            </div>
            <div className='items item6'></div>
        </div>
    </div>
  )
}

export default About