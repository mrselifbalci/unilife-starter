import React from "react"
import "./style.css"
import logo from "../../assets/logo.svg"
import email from "../../assets/icon-email.png"
import heart from "../../assets/icon-heart.png"

const Header = () =>
    <div class="white-font" id="header">
        <div id="branding">
            <img id="logo" src={logo} alt="unilife img" />
            UniLife
        </div>
        <nav>
            <div class="nav-item">
                <img src={heart} alt="heart icon" />
                Shortlist
            </div>
            <div class="nav-item">
                <img src={email} alt="email icon" />
                Contact Us
            </div>
        </nav>
    </div>

export default Header