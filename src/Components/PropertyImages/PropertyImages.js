import React from 'react'
import './PropertyImages.css'

function PropertyImages({image}) {
  return (
    <div className='property-images-container'>
        <div className='large-image-container'>
            <img src={image?.images[0]} alt="bedroom" />
        </div>
        <div className='smaller-images-container'>
            <img src={image?.images[1]} alt="bedroom" />
            <img src={image?.images[2]} alt="bedroom" />
            <img src={image?.images[3]} alt="bedroom" />
        </div>
    </div>
  )
}

export default PropertyImages