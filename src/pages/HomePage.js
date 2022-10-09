import React from 'react'
import '../stylesheets/HomePage.css'
import Banner from '../components/Banner'
import FindHomes from '../components/FindHomes'
import CityCard from '../components/CityCard'
import { FaSearchLocation } from "react-icons/fa";
import { MdChecklistRtl } from "react-icons/md";
import { IoReceiptOutline } from "react-icons/io5";
import { BsHouseDoor } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";



function Homepage() {

  const bannerHeader = 'Find student homes with bills included'
  const bannerText = 'A simple and faster way to search for student accommodation'

  return (
    <div className='homepage-container'>
      <Banner bannerHeader={bannerHeader} bannerText={bannerText}/>
      <FindHomes/>
      <CityCard/>
      
      <button>See All Cities</button>

      <div className='explanation'>
        <h2 className='explanation-header'>Compare all inclusive student homes.</h2>
        <div className='explanation-specification-container'>
          <div className='search'>
            <FaSearchLocation className='search-icon'/>
            <h3>Search</h3>
            <p>Find your dream home in the perfect area near your university.</p>
          </div>
          <div className='compare'>
            <MdChecklistRtl className='compare-icon'/>
            <h3>Compare</h3>
            <p>Compare student accommodation to find the right home for you.</p>
          </div>
          <div className='bills'>
            <IoReceiptOutline className='bills-icon'/>
            <h3>Bills Included</h3>
            <p>Bills are included in all rent prices. No hidden fees.</p>
          </div>
        </div>
      </div>

      <div className='search-and-compare'>
        <div className='left-container'>
          <BsHouseDoor className='selection-icon'/>
          <h3 className='selection-header'>Best selection</h3>
          <p className='selection-text'>Best selection of student accommodations. Never been easier to find a home that’s right for you.</p>
          <FaRegHeart className='favorite-icon'/>
          <h3 className='favorite-header'>Your favorite</h3>
          <p className='favorite-text'>Shortlist your favourite properties and send enquiries in one click.</p>
          <button className='search-compare-button'>Search&Compare</button>
        </div>
        <div className='right-container'>
          <img src='https://images.unsplash.com/photo-1611701710755-3cb5920c6cfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80' alt='Person with smartphone'/>
        </div>
      </div>

    </div>
  )
}

export default Homepage