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
                <option value="saab">Saab</option>
                <option value="fiat">Fiat</option>
                <option value="audi">Audi</option>
            </select> 
        </div>
        <div className='filter-item'>
            <label for="price">Max Price</label>
            <select id="price" name="price">
                <option value="any price">Any price</option>
                <option value="saab">Saab</option>
                <option value="fiat">Fiat</option>
                <option value="audi">Audi</option>
            </select> 
        </div>
        <div className='filter-item'>
            <label for="type">Home Type</label>
            <select id="type" name="type">
                <option value="any type">Any type</option>
                <option value="saab">Saab</option>
                <option value="fiat">Fiat</option>
                <option value="audi">Audi</option>
            </select>
        </div>
    </div>
  )
}

export default PropertySearch