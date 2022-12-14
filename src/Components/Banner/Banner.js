import React from 'react'
import bannerImg from '../../assets/cover-img.png'
import './Banner.css'


function Banner({title, description}) {

    const bannerStyle={
        backgroundImage:`url("${bannerImg}")`,
        backgroundSize:'cover',
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat',
        width:"100%",
        height:"480px",
        color:"white",
        position: "relative"
    }
  return (
    <div style={bannerStyle} className='banner-container'>
      <div className='banner-overlay'></div>
      <div className='banner-text'>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Banner