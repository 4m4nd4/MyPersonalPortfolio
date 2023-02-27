import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/mesaturnheart.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header id='home' className='home'>
      <div className="container header_container">
        <h5>Olá, sou</h5>
        <h1>Amanda Ramos</h1>
        <h5 className='text-light'>Front-End Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#about" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header