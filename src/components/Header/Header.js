import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className="header-container">
        <svg width="42" height="30" viewBox="0 0 42 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.426819 29.9999V11.3999L13.1916 0.399902L25.9564 11.3999V29.9999H0.426819ZM3.0378 27.7499H11.567V22.3999H14.8162V27.7499H23.2874V12.3499L13.1916 3.6499L3.0378 12.3499V27.7499ZM11.567 16.3999V13.5999H14.8162V16.3999H11.567ZM31.0043 29.9999V9.9499L19.9802 0.399902H24.0417L33.6153 8.6999V29.9999H31.0043ZM38.6632 29.9999V7.1999L30.8302 0.399902H34.8918L41.2742 5.9499V29.9999H38.6632ZM3.0378 27.7499H23.2874H3.0378Z" fill="white"/>
</svg>
        <h1>UniLife</h1>
        <div>
            <a href="/">Shortlist</a>
            <a href="/">Contact Us</a>
        </div>
    </div>
  )
}

export default Header