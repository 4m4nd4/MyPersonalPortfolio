import React from 'react'
import './footer.css'

import LOGO from '../../assets/logo.png'
import {FaLinkedinIn} from 'react-icons/fa'
import {ImGithub} from 'react-icons/im'
import {FaTelegramPlane} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a className="footer_logo" href="#home">
        <img src={LOGO} alt="Logo" />
      </a>

      <ul className='permalinks'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">Sobre</a></li>
        <li><a href="#experience">Experiência</a></li>
        <li><a href="#portfolio">Portfólio</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/amanda-ramos-da-silva-8406b8219/" target="_blank" rel="noreferrer"><FaLinkedinIn/></a>
        <a href="https://github.com/4m4nd4" target="_blank" rel="noreferrer"><ImGithub/></a>
        <a href="https://t.me/amanda_rds" target="_blank" rel="noopener noreferrer"><FaTelegramPlane /></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; 4m4nd4</small>
      </div>
    </footer>
  )
}

export default Footer