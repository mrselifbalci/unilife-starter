import React from 'react'
import { useNavigate } from 'react-router-dom'
import './PropertyCard.css'
import bed from '../../assets/Bed.svg'
import bath from '../../assets/Bath.svg'
import tag from '../../assets/Tag.svg'
import home from '../../assets/Home.svg'


function PropertyCard({property}) {
    
    //activate useNavigate
    let navigate = useNavigate();

    // console.log(property._id);

  return (
    <div className='property-container'>
        <div className='property-image'>
            <img src={property.images[0]} alt="property overview"/>
        </div>
        <div className='property-price'>
            <div className='price'>
                <h4>&#8356;&nbsp;{property.rent}</h4>
                <p>Total Rent</p>
            </div>
            
            <div className='beds'>
                <img src={bed} alt="bed icon"/>
                <p>&nbsp;&nbsp;{property.bedroom_count}</p>
            </div>
            <div className='baths'>
                <img src={bath} alt="bath icon" />
                <p>&nbsp;&nbsp;{property.bathroom_count}</p>
            </div>
            
        </div>
        <div className='property-description'>
            <div className='description'>
                <h4>{property.key_features[0]}</h4>
                <h4>{property.furnished}</h4>
            </div>
            <div className='address'>
                <img src={tag} alt="address pin logo" />
                <p>&nbsp;{property.address.street},{property.address.city},{property.address.postcode}</p>
            </div>
        </div>
        <div className='property-view'
            onClick={()=>navigate(`/homedetails/${property?._id}`)} >
            <img src={home} alt="home icon" />
            <h4>&nbsp;&nbsp;View Home</h4>
        </div>
    </div>
  )
}

export default PropertyCard