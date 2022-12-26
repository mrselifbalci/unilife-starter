import React from 'react'
import './PropertyImages.css'

function PropertyImages({property}) {
  return (
    <div className='property-images-container'>
        <div className='large-image-container'>
            <img src={property?.images[0]} alt="bedroom" />
        </div>
        <div className='smaller-images-container'>
            <img src={property?.images[1]} alt="bedroom" />
            <img src={property?.images[2]} alt="bedroom" />
            <img src={property?.images[3]} alt="bedroom" />
        </div>
    </div>
  )
}

export default PropertyImages