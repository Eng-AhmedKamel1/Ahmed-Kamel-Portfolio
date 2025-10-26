import React from 'react'
import './services.css'
import { MdDesignServices } from 'react-icons/md'
import {IoIosRocket} from 'react-icons/io'
import { FaCode } from 'react-icons/fa'
{}

function Services() {
  return (
    <section id='services'>
      <div className="top-section">
        <h5>What I Offer</h5>
        <h2>Services</h2>
      </div>
      <div className="container container-services">

        <article className='curd'>
          <MdDesignServices className='icon'/>
          <h3>Web Design</h3>
          <p className='text-light'> I create modern, user-friendly website designs that focus on great user experience and clean visual structure.</p>
        </article>

        <article className='curd'>
          <IoIosRocket className='icon'/>
          <h3>Fast Performance</h3>
          <p className='text-light'> I optimize websites for speed and responsiveness, ensuring quick loading times and smooth performance on all devices.</p>
        </article>

        <article className='curd'>
          <FaCode className='icon'/>
          <h3>Clean Code</h3>
          <p className='text-light'> I write clean, organized, and maintainable code that follows best practices to make future updates easier and faster.</p>
        </article>

      </div>
    </section>
  )
}

export default Services