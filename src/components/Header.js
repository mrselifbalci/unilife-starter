import React from 'react'
import '../stylesheets/Header.css'
import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineHeart } from "react-icons/ai";
import { BiEnvelope } from "react-icons/bi";


function Header() {
  return (
    <div className='header-container'>
        <div className='header-left'>
            <a href="/" className='unilife-link'><IoHomeOutline className='icon-house'/>UniLife</a>
        </div>
        <div className='header-right'>
            <button className='shortlist'><AiOutlineHeart className='icon-heart'/>Shortlist</button>
            <button className='contactus'><BiEnvelope className='icon-envelope'/>Contact Us</button>
        </div>
    </div>
  )
}

export default Header