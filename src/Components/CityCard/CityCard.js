import React from 'react'
import './CityCard.css'

function CityCard({city, cardStyle, imageUrl, imgWidth, imgHeight, txtColor, imgBorder}) {



    const imageStyle={
        backgroundImage:`url("${imageUrl}")`,
        width:imgWidth,
        height:imgHeight,
        color:txtColor,
        borderRadius:imgBorder
    }

  return (
    <div className={cardStyle}>
        <div style={imageStyle} className='name-container'>
            <h3>{city.name}</h3>
            {
                cardStyle === "top-city-card" && <p>{city.property_count} Properties</p>
            }
        </div>
        
    </div>
  )
}

export default CityCard