import React from 'react';
import './contact.css';
import {TfiEmail} from 'react-icons/tfi'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from "react";
import emailjs from 'emailjs-com'

const Contact = () => {
  const Form = useRef();

  const SendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ygv92tf', 'template_b4yes5a', Form.current, 'm8qsJZiRPSibKZ4yD')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <TfiEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>anazareth777@gmail.com</h5>
            <a href="mailto:anazareth777@gmail.com" target="_blank">Send a message</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+917400123866</h5>
            <a href="https://api.whatsapp.com/send?phone=07400123866" target="_blank">Send a message</a>
          </article>

        </div>
        {/*END OF CONTACT OPTION*/}
        <form ref={Form} onSubmit={SendEmail}>
          <input type="text" name="name" placeholder='Enter Your Full Name' required />
          <input type="email" name="email" placeholder='Enter Your Email' required />
          <textarea name="message" rows="7" placeholder="Enter Your Message" required ></textarea>
          <button type='Submit' className='btn btn-primary'>Send message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact