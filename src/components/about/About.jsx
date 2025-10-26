import React from 'react'
import './about.css'
import ImageMe from '../../assets/profile.jpeg'
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";


function About() {
  return (
    <section className="about" id="about">
      <div className="top-section">
        <h5>Get TO Know</h5>
        <h2>About Me</h2>
        
      </div>

      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-image">
            <img src={ImageMe} alt="" />
          </div>
        </div>

        <div className="about-content">
          <div className="about-cards">
            <div className="about-card">
              <FaAward className='about-icons'/>

              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </div>
            <div className="about-card">
              <FiUsers className='about-icons'/>

              <h5>Clients</h5>
              <small>20+ Clients</small>
            </div>
            <div className="about-card">
              <VscFolderLibrary className='about-icons'/>

              <h5>Projects</h5>
              <small>20+ Completed</small>
            </div>
          </div>
          <p>Skilled Front-End Developer with expertise in HTML, CSS, JavaScript, Bootstrap, and React. I got a Bachelor's degree 
              in Computer Science and Information, Information Systems Department, Zagazig University. Passionate about 
              creating responsive, user-friendly applications and eager to learn new technologies. Strong team player with 
              excellent problem-solving and communication skills.</p>
              <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About