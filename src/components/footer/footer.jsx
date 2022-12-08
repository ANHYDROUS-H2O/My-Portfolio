import React from 'react';
import './footer.css';
import {AiFillLinkedin} from 'react-icons/ai'
import {BsTwitter} from 'react-icons/bs'
import {FaTelegramPlane} from 'react-icons/fa'

const footer = () => {
  return (
    <footer>
        <a href="#" className='footer__logo'>STR34K</a>

        <ul className='permalinks'>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="footer__socials">
          <a href="https://linkedin.com"><AiFillLinkedin /></a>
          <a href="https://twitter.com"><BsTwitter /></a>
          <a href="https://telegram.com"><FaTelegramPlane /></a>
        </div>

        <div className="footer__copyright">
          <small>STR34K. All rights reserved.</small>
        </div>
    </footer>
  )
}

export default footer