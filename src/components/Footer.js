import React from 'react'
import '../stylesheets/Footer.css'

function Footer() {
  return (
    <div className='footer-container'>
        
        <div className='keep-in-touch'>
            <h2>Keep in touch</h2>
            <p>Curious about new offerings? Sign up for our weekly newsletter and stay informed.</p>
            {/* <div className='submit-newsletter'> */}
                <input placeholder='Your email'/>
                <button>Submit</button>
            {/* </div> */}
        </div>
        <div className='socialize'>
            <h2>Let's Socialize</h2>
            <a href='https://www.facebook.com'>Facebook</a>
            <a href='https://www.twitter.com'>Twitter</a>
            <a href='https://www.instagram.com'>Instagram</a>
        </div>
        <div className='copyright-container'>
            <div className='copyright-container-left'>
                <a href=''>About Us</a>
                <a href=''> Terms & Conditions</a>
                <a href=''>Privacy & Cookie Policies</a>
            </div>
            <div className='copyright-container-right'>
                <p>2022</p>
                <p>UniLife</p>
            </div>
        </div>
    </div>
  )
}

export default Footer