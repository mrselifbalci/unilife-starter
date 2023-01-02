import React from 'react'
import './CityBedroomSearch.css'

function CityBedroomSearch() {
  return (
    <div className='city-bedrooms-search-container'>
        <select id="city" name="city">
            <option value="Search by City">Search by City</option>

        </select>
        <select id="bedrooms" name="bedrooms">
            <option value="Any Bedrooms">Any Bedrooms</option>
            <option value="1">1 Bedroom</option>
            <option value="2">2 Bedrooms</option>
            <option value="3">3 Bedrooms</option>
            <option value="4">4 Bedrooms</option>
            <option value="5">5 Bedrooms</option>
            <option value="6">6 Bedrooms</option>
            <option value="7">7 Bedrooms</option>
        </select>
        <button>Find Homes</button>
    </div>
  )
}

export default CityBedroomSearch