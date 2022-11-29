import React from 'react'
import './Header.css'
import logo from '../../assets/House.svg';
import unilife from '../../assets/UniLife.svg';
import {AiOutlineHeart} from 'react-icons/ai';
import {BiEnvelope} from 'react-icons/bi';

function Header() {


  return (
    <div className='header-container'>
        <div id='logo'>
            <img src={logo} className='logo-img' alt='UniLife Logo'/>
            <img src={unilife} alt='UniLife'/>
        </div>
        <div className='link-container'>
            <div id='favorites'>
                <AiOutlineHeart className='icon'/>
                <p>Shortlist</p>
            </div>
            <div id='contact-us'>
                <BiEnvelope className='icon'/>
                <p>Contact Us</p>
            </div>
        </div>
    </div>
  )
}

export default Header