import React, { useRef } from 'react';
import './contact.css'

import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

import emailjs from '@emailjs/browser';


const ContactData =[
  {
    id:1,
    icon:<MdOutlineEmail />,
    title:'Email',
    info:'ahmedkamela335@gmail.com',
    link:'https://mail.google.com/mail/?view=cm&to=ahmedkamela335@gmail.com'
  },{
     id:2,
    icon:<RiMessengerLine />,
    title:'Messenger',
    info:'Ahmed Kamel',
    link:'https://m.me/ahmed0000ahme'

  },{
     id:3,
    icon:<BsWhatsapp />,
    title:'Whatsapp',
    info:'01010704336',
    link:'https://wa.me/201010704336?text=مرحبًا%20أحمد،%20عايز%20أستفسر%20عن%20خدمتك'
  }

]

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_cyro6vu', 'template_xrllcj7', form.current, 'FSP5QY9eXnPrGQT4o',
      )
      e.target.reset();
  };

  return (
    <section className="cotact" id="contact">
      <div className="top-section">
        <h5>Get TO Know</h5>
        <h2>Contact Me</h2>
      </div>
      <div className="container contact-container">
        <div className="contact-options">
          {ContactData.map(({id,icon,title,info,link})=>(
            <article key={id} className="contact-option">
              {icon}
              <h4>{title}</h4>
              <h5>{info}</h5>
              <a href={link} target="_blank" rel="noreferrer">Send Message</a>
            </article>
          ))}
        </div>
          <form ref={form} onSubmit={sendEmail} action="">
            <input type="text" placeholder="Full Name" name="name"/>
            <input type="email" placeholder="Your Email" name="email" />
            <textarea  name="message" id="" cols="30" rows="10" placeholder="Enter Your Message"></textarea>
            <button className="btn btn-primary">Send Message</button>
          </form>

        
      </div>
    </section>
  );
}

export default Contact;
