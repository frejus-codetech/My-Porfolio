import React from 'react'
import './Parcours.css'


function Parcours() {
  return (
    <div>
        <div id="Parcours">
            <p className='ppar'><span>●</span>Mon parcours</p>
            <h3>Une évolution entre science sociale et technologie</h3>
            
        <div className="timeline">
            <div className="container left" data-aos="fade-right">
                <div className="content">
                    <h1>2024</h1>
                    
                </div>
            </div>

            <div className="container right" data-aos="fade-left">
                <div className="content">
                    <h1 style={{ color: '#703d3d' }}>Baccalauréat, Série D</h1>
                    <p>Début des études en Sociologie-Anthropoogie</p>
                </div>
            </div>

            <div className="container left" data-aos="fade-right">
                <div className="content">
                    <h1>2025</h1>
                    
                </div>
            </div>

            <div className="container right" data-aos="fade-left">
                <div className="content">
                    <h1 style={{ color: '#703d3d' }}>Frontend & Base de donnée</h1>
                    <p>Initiation à l'apprentissge du developpement web <br />
                    avec une formation en autodidacte
                    </p>
                </div>
            </div>

            <div className="container left" data-aos="fade-right">
                <div className="content">
                    <h1>2026</h1>
                    
                </div>
            </div>

            <div className="container right" data-aos="fade-left">
                <div className="content">
                    <h1 style={{ color: '#703d3d' }}>Backend</h1>
                    <p>Progression avec la réalisation de nombreux projets web  <br />
                      client-side  et aussi des projets web serveur-side
                    </p>
                </div>
            </div>

             <div className="container left" data-aos="fade-right">
                <div className="content">
                    <h1>Today</h1>
                    
                </div>
            </div>

            <div className="container right" data-aos="fade-left">
                <div className="content">
                    <h1 style={{ color: '#703d3d' }}>Cursus & Dev Full-Stack</h1>
                    <p>→3ᵉ année en Sociologie-Anthropologie <br />
                        →Construction d'un profil Full-Stack
                    </p>
                </div>
            </div>

            
        </div>


    </div>

    </div>
  )
}

export default Parcours