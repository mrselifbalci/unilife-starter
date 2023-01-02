import React from 'react'
import './PropertyImages.css'

function PropertyImages({images}) {
  return (
    <div className='property-images-container'>
        <div className='large-image-container'>
            <img src={images[0]} alt="bedroom" />
        </div>
        <div className='smaller-images-container'>
            <img src={images[1]} alt="bedroom" />
            <img src={images[2]} alt="bedroom" />
            <img src={images[3]} alt="bedroom" />
        </div>
    </div>
  )
}

export default PropertyImages