import React from 'react'
import './nav.css'

import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {HiOutlineCode} from 'react-icons/hi'

import { useState } from 'react'

import {Link} from 'react-scroll'

const Nav = () => {

  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav>
      <Link to="home" spy={true} smooth={true} offset={-100} duration={100} onClick={() => setActiveNav('#')} className={activeNav === '' ? 'active' : ''}> <AiOutlineHome/> </Link>
      <Link to="about" spy={true} smooth={true} offset={-100} duration={100} onClick={() => setActiveNav('#about')} className={activeNav === '' ? 'active' : ''}> <AiOutlineUser/> </Link>
      <Link to="experiences" spy={true} smooth={true} offset={-100} duration={100} onClick={() => setActiveNav('#experiences')} className={activeNav === '' ? 'active' : ''}> <BiBook/> </Link>
      <Link to="portfolio" spy={true} smooth={true} offset={-150} duration={100} onClick={() => setActiveNav('#portfolio')} className={activeNav === '' ? 'active' : ''}> <HiOutlineCode/> </Link>
    </nav>
  )
}

export default Nav