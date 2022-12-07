import React from 'react'
import './CityCard.css'

function CityCard({city}) {



    const imageStyle={
        backgroundImage:`url("${city.image_url}")`,
        backgroundSize:'cover',
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat',
        width:"400px",
        height:"300px",
        color:"white",
        borderRadius:"24px",
        margin: "16px"
    }

  return (
        <div style={imageStyle} className='name-container'>
            <h3>{city.name}</h3>
            <p>{city.property_count} Properties</p>
        </div>
  )
}

export default CityCard