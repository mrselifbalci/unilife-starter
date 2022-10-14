import React, {useState, useEffect} from 'react'
import axios from 'axios';
import CityCard from '../components/CityCard'
import '../stylesheets/TopCities.css'

function TopCities({baseUrl}) {

  const [city, setCity] = useState([])

  useEffect(()=>{
    axios.get(`${baseUrl}cities?limit=9`)
    .then(res =>{setCity(res.data.response)})
    .catch(err=>console.log(err))
  },[])

  return (
    <div className='top-cities-container'>
        <h2 className='header-top-cities'>Student accommodations in our top cities</h2>
        <div className='card-container'>
            {
            city.map((item)=>{
                return <CityCard item={item}/>})
            }
        </div>
    </div>
  )
}

export default TopCities