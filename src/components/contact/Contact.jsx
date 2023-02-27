import React from 'react'
import './contact.css'

import {MdOutlineEmail} from 'react-icons/md'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {BsTelegram} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
        <h5>Fale comigo</h5>
        <h2>Contato</h2>

        <div className="container contact_container">
            <div className="contact_options">
                <article className="contact_option">
                    <MdOutlineEmail className='contact_option-icon'/>
                    <h4>Email</h4>
                    <h5>amanda310503@gmail.com</h5>
                    <a href="mailto:amanda310503@gmail.com" target="_blank" rel="noreferrer">Acessar</a>
                </article>

                <article className="contact_option">
                    <AiOutlineLinkedin className='contact_option-icon'/>
                    <h4>LinkedIn</h4>
                    <h5>www.linkedin.com/in/amanda3105</h5>
                    <a href="https://www.linkedin.com/in/amanda-ramos-da-silva-8406b8219/" target="_blank" rel="noreferrer">Acessar</a>
                </article>

                <article className="contact_option">
                    <BsTelegram className='contact_option-icon'/>
                    <h4>LinkedIn</h4>
                    <h5>@amanda_rds</h5>
                    <a href="https://t.me/amanda_rds" target="_blank" rel="noreferrer">Acessar</a>
                </article>
            </div>
        </div>
    </section>
  )
}

export default Contact