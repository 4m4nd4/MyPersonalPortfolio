import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsTelegram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/amanda-ramos-da-silva-8406b8219/" target="_blank" rel='noreferrer'> <BsLinkedin/> </a>
        <a href="https://github.com/4m4nd4" target="_blank" rel='noreferrer'> <FaGithub/> </a>
        <a href="https://t.me/amanda_rds" target="_blank" rel='noreferrer'> <BsTelegram/> </a>
    </div>
  )
}

export default HeaderSocials

/*
<a href="https://github.com/4m4nd4" target={_blank}></a>
<a href="www.linkedin.com/in/amanda3105" target={_blank}></a>
*/