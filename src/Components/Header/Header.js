import React from 'react'
import './Header.css'

function Header() {


  return (
    <div className='header-container'>
        <div id='logo'>
            <image />
            <p>UniLife</p>
        </div>
        <div className='link-container'>
            <div id='favorites'>
                <image />
                <p>Shortlist</p>
            </div>
            <div id='contact-us'>
                <image />
                <p>Contact Us</p>
            </div>
        </div>
    </div>
  )
}

export default Header