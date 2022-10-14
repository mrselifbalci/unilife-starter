import React from 'react'
import '../stylesheets/Banner.css'

function Banner({bannerHeader, bannerText}) {
  return (
    <div className='banner-container'>
      <div className='overlay'></div>
      <h1>{bannerHeader}</h1>
      <p>{bannerText}</p>
    </div>
  )
}

export default Banner