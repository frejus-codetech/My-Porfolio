import React from 'react';
import Travel from '../../assets/image/Travel.png'
import Fanta from '../../assets/image/Fanta.png'
import ToDo from '../../assets/image/ToDo.png'
import Porfolio from '../../assets/image/Porfolio.png'
import "./Project.css";


function Project() {
  return (
    <div id='projects'>
        <div className='comp'>
            <div>
                <p><span>●</span>Mes projets</p>
                <h3>Découvrez une sélection de mes réalisations,</h3>
            </div>
        
            <div className='carts'>
                <div className='cart' data-aos="flip-down">
                    <img src={Travel} alt=""/>
                    <p>TravelAgency</p> 
                    <div className='tech'>
                        <span>HTML</span>
                        <span>CSS</span>
                        
                    </div>
                    <div className='lins'>
                        <a id='aa1' href="https://github.com/frejus-codetech/TravelAgencyProject" target='bank'><i class="fa-brands fa-github"></i></a>
                        <a id='aa2' href="https://travelagency-6n6e5bgx6-frejus-kpadonou.vercel.app/" target='bank'><i class="fa-solid fa-arrow-up-right-from-square" ></i></a>
                    </div>
                </div>
                
                <div className='cart' data-aos="flip-down">
                    <img src={Fanta} alt=""/>
                    <p>FantaPage</p>
                    <div className='tech'>
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>JS</span>
                    </div>
                    <div className='lins'>
                        <a id='aa1' href="https://github.com/frejus-codetech/FantaProject" target='bank'><i class="fa-brands fa-github"></i></a>
                        <a id='aa2' href="https://fantaproject.vercel.app/" target='bank'><i class="fa-solid fa-arrow-up-right-from-square" ></i></a>
                    </div>
                </div>

                  <div className='cart' data-aos="flip-down">
                    <img src={ToDo} alt=""/>
                    <p>Todo List</p>
                    <div className='tech'>
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>JS</span>
                    </div>
                    <div className='lins'>
                        <a id='aa1' href="https://github.com/frejus-codetech/ToDoListProject" target='bank'><i class="fa-brands fa-github"></i></a>
                        <a id='aa2' href="https://to-do-list-project-ashen.vercel.app/" target='bank'><i class="fa-solid fa-arrow-up-right-from-square" ></i></a>
                    </div>
                </div>

                <div className='cart' data-aos="flip-down">
                    <img src={Porfolio} alt=""/>
                    <p>PorfolioModel</p>
                    <div className='tech'>
                        <span>react</span>
                        <span>CSS</span>
                        <span>JS</span>
                    </div>
                    <div className='lins'>
                        <a id='aa1' href="https://porfoliomodel.vercel.app/" target='bank'><i class="fa-brands fa-github"></i></a>
                        <a id='aa2' href="https://porfoliomodel.vercel.app/" target='bank'><i class="fa-solid fa-arrow-up-right-from-square" ></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Project