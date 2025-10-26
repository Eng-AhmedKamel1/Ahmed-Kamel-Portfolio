import React from 'react'
import './home.css'
import Me from '../../assets/profile1.png'
import CV from '../../assets/Ahmed-Kamel-CV (2).pdf'
import HomeSocials from './HomeSocials'
import { ReactTyped } from "react-typed";




function Home() {
  return (
    <div className="home" id='home'>
      <div className="container home-container">
        <h4>Hello i'm</h4>
        <h1 className="typed-text">
        <ReactTyped
        strings={["Ahmed Kamel", "Front End Developer"]}
        typeSpeed={100}
        backSpeed={60}
        loop
        />
        </h1>
        <h4 className='text-light'>🔸Creative Frontend Developer | Turning Ideas Into Code🔸</h4>

        <div className="btns">
        <a className='btn' href={CV} download>Download CV</a>
        <a className='btn btn-primary' href="#contact">Let's Talk</a>
        </div>

        <div className="me">
          <img src={Me} alt="" />
        </div>
        <a href="#about" className='scroll-down'>Scroll Down</a>
        <HomeSocials/>
      </div>
    </div>
  )
}

export default Home
