import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { BsMedium } from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="http://www.linkedin.com/in/andre-nazareth-3b248b196" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/ANHYDROUS-H2O" target="_blank"><BsGithub /></a>
        <a href="https://medium.com/@anazareth777" target="_blank"><BsMedium /></a>
    </div>
  )
}

export default HeaderSocials