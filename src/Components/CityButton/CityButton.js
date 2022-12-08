import React from 'react'
import './CityButton.css'

function CityButton({city}) {

    const buttonStyle ={
        fontSize:"28px",
        border:"1px black solid",
        backgroundColor:"white",
        borderRadius:"24px",
        width:"302px",
        height:"88px",
        margin:"12px",
    }

  return (
    <div className='city-button-wrapper'>
        <button className='button'
        style={buttonStyle}>{city.name}</button>
    </div>
  )
}

export default CityButton