import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa6";

function HomeSocials() {
  return (
    <div className="home-socials">
        <a href="https://www.linkedin.com/in/ahmed-kamel-996aa0271/" target='_blank'><FaLinkedin /></a>
        <a href="https://github.com/Eng-AhmedKamel1" target='_blank'><FaGithub /></a>
        <a href="" target='_blank'><FaDribbble /></a>
    </div>
  )
}

export default HomeSocials
