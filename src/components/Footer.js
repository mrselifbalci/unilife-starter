import React from 'react'
import '../stylesheets/Footer.css'
import { BiCopyright } from "react-icons/bi";
import { AiFillInstagram } from "react-icons/ai";
import { GrTwitter } from "react-icons/gr";
import { BsFacebook } from "react-icons/bs";

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
            <a href='https://www.facebook.com'><BsFacebook className='fb'/>Facebook</a>
            <a href='https://www.twitter.com'><GrTwitter className='tweet'/>Twitter</a>
            <a href='https://www.instagram.com'><AiFillInstagram className='insta'/>Instagram</a>
        </div>
        <div className='copyright-container'>
            <div className='copyright-container-left'>
                <a href=''>About Us</a>
                <a href=''>Terms & Conditions</a>
                <a href=''>Privacy & Cookie Policies</a>
            </div>
            <div className='copyright-container-right'>oj
                <p>2022</p>
                <p><BiCopyright className='copyright-icon'/>UniLife</p>
            </div>
        </div>
    </div>
  )
}

export default Footer