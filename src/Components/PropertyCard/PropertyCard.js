import React from 'react'
import { Link } from 'react-router-dom'
import './PropertyCard.css'
import bed from '../../assets/Bed.svg'
import bath from '../../assets/Bath.svg'
import tag from '../../assets/Tag.svg'
import home from '../../assets/Home.svg'


function PropertyCard({property}) {
  return (
    <div className='property-container'>
        <div className='property-image'>
            <img src={property.images[0]} alt="property overview"/>
        </div>
        <div className='property-price'>
            <div className='price'>
                <h4>price holder</h4>
                <p>price includes holder</p>
            </div>
            <div className='beds'>
                <img src={bed} alt="bed icon"/>
                <p>number of beds holder</p>
            </div>
            <div className='baths'>
                <img src={bath} alt="bath icon" />
                <p>number of baths holder</p>
            </div>
        </div>
        <div className='property-description'>
            <div className='description'>
                <h4>"Detached" holder</h4>
                <h4>"Fully Furnished" holder</h4>
            </div>
            <div className='address'>
                <img src={tag} alt="address pin logo" />
                <p>&nbsp;Address holder</p>
            </div>
        </div>
        <div className='property-view'>
            <img src={home} alt="home icon" />
            <h4>View Home</h4>
        </div>
    </div>
  )
}

export default PropertyCard