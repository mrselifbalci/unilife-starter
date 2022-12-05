import React from 'react'
import facebook from '../../assets/Facebook.svg';
import twitter from '../../assets/Twitter.svg';
import instagram from '../../assets/Instagram.svg';
import './Socialize.css'

function Socialize() {
  return (
    <div className='socialize-container'>
        <div className='keep-in-touch-container'>
            <h3>Keep in touch</h3>
            <p>Curious about new offerings? Sign up for our weekly newsletter and stay informed.</p>
            <input type='email' placeholder='Your email' />
        </div>
        <div className='let-us-socialize-container'>
            <h2>Let's Socialize</h2>
            <div className='facebook-container'>
                <img src={facebook} className='facebook-logo' alt='Facebook Logo' />
                <p>Facebook</p>
            </div>
            <div className='twitter-container'>
                <img src={twitter} className='twitter-logo' alt='Twitter-logo' />
                <p>Twitter</p>
            </div>
            <div className='instagram-container'>
                <img src={instagram} className='instagram-logo' alt='Instagram-logo' />
                <p>Instagram</p>
            </div>
        </div>
    </div>
  )
}

export default Socialize