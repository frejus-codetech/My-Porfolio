import React from 'react'
import {useState} from "react";
import './Skills.css'
import htlm from "../../assets/icons/html.icon.png";
import css from "../../assets/icons/css.icon.png";
import git from "../../assets/icons/git.icon.png";
import mongo from "../../assets/icons/mongo.icon.png";
import node from "../../assets/icons/node.icon.png";
import python from "../../assets/icons/python.icon.png";
import react from "../../assets/icons/react.icon.png";
import java from "../../assets/icons/js.icon.png";
function Skills() {

  const [level, setLevel] = useState({
    skils: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Git & Github", "Mongo", "Python",],
    percentSkill: ["95%", "90%", "90%", "85%", "80%", "70%", "85%", "80%"]
  });

  return (
    <div id='skills'>
      <div className='head'>
        <p style={{}}><span>●</span>Mes compétences</p>
        <h3>Technologies & outils</h3>
      </div>

      <div className='cards' data-aos="fade-down">
        
            <div className='card' data-aos="fade-down">
              <img src={htlm} alt="" />
              <p>{level.skils[0]}</p>
              <span className='percent'>{level.percentSkill[0]}</span>
              <div className='level-html'></div>
            </div>

            <div className='card' data-aos="fade-down">
              <img src={css} alt="" />
              <p>{level.skils[1]}</p>
              <span className='percent'>{level.percentSkill[1]}</span>
              <div className='level-css'></div>
            </div>

            <div className='card' data-aos="fade-down">
              <img src={java} alt="" />
              <p>{level.skils[2]}</p>
              <span className='percent'>{level.percentSkill[2]}</span>
              <div className='level-js'></div>
            </div>

            <div className='card' data-aos="fade-down">
              <img src={react} alt="" />
              <p>{level.skils[3]}</p>
              <span className='percent'>{level.percentSkill[3]}</span>
              <div className='level-react'></div>
            </div>
        

        
            <div className='card' data-aos="fade-down">
              <img src={node} alt="" />
              <p>{level.skils[4]}</p>
              <span className='percent'>{level.percentSkill[4]}</span>
              <div className='level-node'></div>
            </div>

            <div className='card' data-aos="fade-down">
              <img src={git} alt="" />
              <p>{level.skils[5]}</p>
              <span className='percent'>{level.percentSkill[5]}</span>
              <div className='level-git'></div>
            </div>

            <div className='card' data-aos="fade-down">
              <img src={mongo} alt="" />
              <p>{level.skils[6]}</p>
              <span className='percent'>{level.percentSkill[6]}</span>
              <div className='level-mongo'></div>
            </div>

            <div className='card' data-aos="fade-down">
              <img src={python} alt="" />
              <p>{level.skils[7]}</p>
              <span className='percent'>{level.percentSkill[7]}</span>
              <div className='level-python'></div>
            </div>
        
      </div> 

    </div>
  )
}

export default Skills