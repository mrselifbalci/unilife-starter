import React from 'react'
import Banner from '../../Components/Banner/Banner'
import CityButton from '../../Components/CityButton/CityButton'
import axios from 'axios'
import './SeeAllCities.css'

function SeeAllCities() {

  //create state to save city names
   const [city, setCity] = React.useState([])


  //call api to get city names
  React.useEffect(
    ()=>{
      axios.get('https://unilife-server.herokuapp.com/cities?limit=20')
      .then(res =>{
        console.log(res.data.response);
        setCity(res.data.response)
      })
    }, []
  )

  return (
    <div className='see-all-cities-container'>
      <Banner 
      title="Student Accomodation"
      description="UniLife have student accommodation available across the UK.
      Whatever you’re after, we can help you find the right student accommodation for you."/>
      <div className='city-buttons-container'>
        <h2>Search by City</h2>
        <div className='city-buttons-wrapper'>
          {
            city.map(item=> <CityButton city={item} />)
          }
        </div>
      </div>
    </div>
  )
}

export default SeeAllCities