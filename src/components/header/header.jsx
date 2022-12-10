import React from 'react';
import './header.css';
import CTA from './CTA'
import ME from '../../assets/me1.png'
import HeaderSocials from './HeaderSocials';

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h4 className='header__special'> Hello I'm</h4>
        <h1>Andre Isaac Nazareth</h1>
        <h3 className="text-light">ML Engineer</h3>
        <CTA /> 
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default header