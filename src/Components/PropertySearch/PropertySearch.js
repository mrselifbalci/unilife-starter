import React from 'react'
import './PropertySearch.css'

function PropertySearch() {
  return (
    <div className='filter-container'>
        <div className='filter-item'>
            <label for="bedroom">Bedroom</label>
            <select id="bedroom" name="bedroom">
                <option value="any bedroom">Any bedroom</option>
                <option value="1">1 Bedroom</option>
                <option value="2">2 Bedrooms</option>
                <option value="3">3 Bedrooms</option>
                <option value="4">4 Bedrooms</option>
                <option value="5">5 Bedrooms</option>
                <option value="6">6 Bedrooms</option>
                <option value="7">7 Bedrooms</option>
            </select>
        </div>
        <div className='filter-item'>
            <label for="bathroom">Bathroom</label>
            <select id="bathroom" name="bathroom">
                <option value="any bathroom">Any bathroom</option>
                <option value="1">1 Bathroom</option>
                <option value="2">2 Bathrooms</option>
                <option value="3">3 Bathrooms</option>
            </select> 
        </div>
        <div className='filter-item'>
            <label for="price">Max Price</label>
            <select id="price" name="price">
                <option value="any price">Any price</option>
                <option value="500">500</option>
                <option value="1000">1000</option>
                <option value="1500">1500</option>
                <option value="2000">2000</option>
                <option value="2500">2500</option>
                <option value="3000">3000</option>
            </select> 
        </div>
        <div className='filter-item'>
            <label for="type">Home Type</label>
            <select id="type" name="type">
                <option value="any type">Any home type</option>
                <option value="detached">Detached</option>
                <option value="semi-detached">Semi-Detached</option>
                <option value="apartment">Apartment</option>
            </select>
        </div>
    </div>
  )
}

export default PropertySearch