import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaTiktok } from 'react-icons/fa'

function Footer() {
  return (
    <footer>
      <a href="" className="footer-logo">Eng Ahmed Kamel</a>

      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li> 

      </ul>
      <div className="footer-socials">
        <a href="https://www.facebook.com/ahmed0000ahme" target='_blank'><FaFacebookF/></a>
        <a href="https://www.instagram.com/ll.ahmed.kamel.ll/" target='_blank'><FaInstagram/></a>
        <a href="https://www.tiktok.com/@a.kamel01" target='_blank'><FaTiktok/></a>
        

      </div>
      <div className="footer-copyright">
        <small>&copy; <a href="">Eng Ahmed Kamel</a> All Rights Reserved.</small>
      </div>
    </footer>
  )
}

export default Footer