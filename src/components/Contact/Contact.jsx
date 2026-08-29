import React from 'react'
import './contact.css'


function Contact() {
  return (
    <div id='contact'>
        <div className='refe' data-aos="fade-right">
            <p><span>●</span>Me contacter</p>
            <h3>Discutons !</h3>
            <div className="bouge">
                <small><p>Vous avez une idée, un projet, une offre ou <br />
                    simplement envie de discuter ? N'hésitez pas <br /> 
                    à me contacter, je serai ravi d'échanger avec vous.</p>
                </small>
            </div>
            <div className="boud">
                <span className='ico'>
                    <p><i class="fa-regular fa-envelope"></i> kpadonouf762@gmail.com</p>
                    <p><i class="fa-solid fa-phone"></i> +229 01 41 72 36 48</p>
                    <p><i class="fa-solid fa-location-dot"></i> Cotonou, Benin</p>
                </span>
            </div>
        </div>
        <div className='formulaire' data-aos="fade-left">
            <form action="">
               <div>
                <input type="text" id='nom' placeholder='Name'/>
            </div>

            <div>
                <input type="email" id='email' placeholder='Email'/>
            </div>
                <div className='place' contentEditable='true' placeholder='Enter message...'></div>

                <button type='submit'>Send Message</button>
            </form>
        </div>

    </div>
  )
}

export default Contact