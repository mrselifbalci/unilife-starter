import axios from 'axios'
import React from 'react'
import CityCard from '../../Components/CityCard/CityCard'
import './Homepage.css'
import search from '../../assets/Search.svg'
import compare from '../../assets/Compare.svg'
import bills from '../../assets/Bills.svg'
import Banner from '../../Components/Banner/Banner'
import person from '../../assets/person.png'
import best from '../../assets/Best-Selection.svg'
import favorite from '../../assets/Favorite.svg'
import { Link } from 'react-router-dom'
import CityBedroomSearch from '../../Components/CityBedroomSearch/CityBedroomSearch'



function Homepage() {
  const baseUrl = "https://unilife-server.herokuapp.com"
  //create state for cities
  const [topCities, setTopCities] = React.useState([])
  

  //call api when the component loads
  React.useEffect(
    ()=>{
      //call api to get cities
      axios.get(`${baseUrl}/cities`)
      .then(res =>{
        // console.log(res.data.response);
        setTopCities(res.data.response.slice(0,9))
      })
      .catch(err => console.log(err))
    },[]
  )

  return (
    <div className='homepage-container'>
      <Banner title="Find student homes with bills included"
      description="A simple and faster way to search for student accommodation"/>
      {/* {
        cities.map(item => <p>{item.name}</p>)
      } */}
      <div className='citybedrooms-search-container'>
        {/* <p>Search Container Placeholder</p> */}
        <CityBedroomSearch />
      </div>
      <div className='accommodations-wrapper'>
        <h3>Student accomodations in our top cities</h3>
      </div>
      <div className='top-cities-wrapper'>
        {
          topCities.map(item=> <CityCard 
                        key={item._id} city={item}/>)
        }
      </div>
      <div className='cities-button-container'>
        <Link to={'/seeallcities'}>
        <button className='all-cities-button'>See All Cities</button>
        </Link>  
      </div>
      <div className='inclusive-outside-wrapper'>
        <div className='inclusive-container'>
            <h2>Compare all inclusive student homes.</h2>
            <div className='search-compare-bills-container'>
              <div className='inclusive-wrapper'>
                <img src={search} alt="Search logo" />
                <h3>Search</h3>
                <p>Find your dream home in the perfect area near your university.</p>
              </div>
              <div className='inclusive-wrapper'>
                <img src={compare} alt="Compare logo" />
                <h3>Compare</h3>
                <p>Compare student accommodation to find the right home for you.</p>
              </div>
              <div className='inclusive-wrapper'>
                <img src={bills} alt="Bills included logo" />
                <h3>Bills Included</h3>
                <p>Bills are included in all rent prices. No hidden fees.</p>
              </div>
            </div>
        </div>
      </div>
      <div className='search-container'>
        <div className='search-text'>
          <div className='best-selection-wrapper'>
            <img src={best} alt="Best Selection logo" />
            <div className='best-selection-text'>
                <h4>Best Selection</h4>
                <p>Best selection of student acommodations. Never been easier to find a home that's right for you.</p>
            </div>
          </div>
          <div className='favorite-wrapper'>
            <img src={favorite} alt="Favorite logo" />
            <div className='favorite-text'>
                <h4>Your Favorite</h4>
                <p>Shortlist your favorite properties and send enquiries in one click.</p>
            </div>
          </div>
          <button className='search-compare-button'>Search & Compare</button>
        </div>
        <div className='search-image'>
          <img src={person} alt="Person on cell phone" />
        </div>
      </div>
    </div>
  )
}

export default Homepage