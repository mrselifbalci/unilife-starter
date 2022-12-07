import React from 'react'
import bannerImg from '../../assets/cover-img.png'

function Banner() {

    const bannerStyle={
        backgroundImage:`url("${bannerImg}")`,
        backgroundSize:'cover',
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat',
        width:"100%",
        height:"480px",
        color:"white"
    }
  return (
    <div style={bannerStyle}>
        Banner
    </div>
  )
}

export default Banner