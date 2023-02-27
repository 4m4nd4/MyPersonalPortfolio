import React from 'react'
import './about.css'

import ME from '../../assets/mestars.png'
import {BsLightbulb} from 'react-icons/bs'
import {FiClipboard} from 'react-icons/fi'
import {BiBrain} from 'react-icons/bi'

const About = () => {
  return (
    <section id='about'>
      <h5>Um pouco</h5>
      <h2>sobre mim</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About img" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">

          <article className='about_card'>
            <BsLightbulb className='about_icon'/>
            <h5>Criativa</h5>
            <small>soft skill</small>
          </article>

          <article className='about_card'>
            <FiClipboard className='about_icon'/>
            <h5>Organizada</h5>
            <small>soft skill</small>
          </article>

          <article className='about_card'>
            <BiBrain className='about_icon'/>
            <h5>Lógica</h5>
            <small>soft skill</small>
          </article>

          </div>

          <p>
            Sou Amanda, tenho 19 anos e estou iniciando minha carreira como Dev Front-End. 
            Graduada em Análise e Desenvolvimento de Sistemas, concluí cursos focados em Front-end e Design. 
            Estou sempre buscando novos conhecimentos e desafios.
          </p>

          <a href="#home">
            Para mais informações, baixe meu CV
          </a>
        </div>
      </div>
    </section>
  )
}

export default About