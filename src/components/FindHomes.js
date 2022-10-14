import React, {useEffect, useState} from 'react'
import axios from 'axios'
import '../stylesheets/FindHomes.css'

function FindHomes({baseUrl}) {

  const [city, setCity] = useState([])
  const [bedrooms, setBedrooms] = useState([])
  const [filteredBedrooms, setFilteredBedrooms] = useState([])

  useEffect(()=>{
    axios.get(`${baseUrl}cities?limit=20`)
    .then(res =>{setCity(res.data.response)})
    .catch(err=>console.log(err))
  },[])

  useEffect(()=>{
    axios.get(`${baseUrl}properties?limit=120`)
    .then(res => {setBedrooms(res.data.data)})
    .catch(err=>console.log(err))
  },[])

  const handlerBedroomFilter=(event)=>{
    setFilteredBedrooms(event.target.value)
  }

  return (
    <div className='find-homes-container'>
      <select className='select-city-homes' onChange={handlerBedroomFilter} required>
        <option value="">Search by city</option>
        {
          city.map((item)=>{
            return <option key={item._id} value={item._id}>
              {item.name}
            </option>
          })
        }
      </select>
      <select className='select-bedrooms'>
      <option value="">Bedrooms</option>
        {
          bedrooms.filter(item=>item.city_id._id === filteredBedrooms).map((item)=>{
            return <option key={item._id} value={item.bedroom_count}>
              {item.bedroom_count}
            </option>
          })
        }
      </select>
      <button>Find Homes</button>
    </div>
  )
}


export default FindHomes