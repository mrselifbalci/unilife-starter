import React from 'react'
import Banner from '../components/Banner'
import SearchByCity from '../components/SearchByCity'
import '../stylesheets/SeeAllCitiesPage.css'


function SeeAllCitiesPage({baseUrl}) {

    const bannerHeader = 'Student Accomodation'
    const bannerText = 'UniLife has student accommodation available across the UK. Whatever you’re after, we can help you find the right student accommodation for you.'

  return (
    <div className='cities-page-container'>
        <Banner bannerHeader={bannerHeader} bannerText={bannerText}/>

        <h2 className='header-search-by-city'>Search by City</h2>

        <SearchByCity baseUrl={baseUrl}/>
    </div>
  )
}

export default SeeAllCitiesPage