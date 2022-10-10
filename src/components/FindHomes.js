import React, {useEffect, useState} from 'react'
import axios from 'axios'
import '../stylesheets/FindHomes.css'

function FindHomes({baseUrl}) {

  const [city, setCity] = useState([])

  useEffect(()=>{
    axios.get(`${baseUrl}cities?limit=20`)
    .then(res =>{setCity(res.data.response)})
    .catch(err=>console.log(err))
  },[])

  return (
    <div className='find-homes-container'>
      <select className='select-city-homes'>
        <option value="">Search by city</option>
        {
          city.map((item)=>{
            return <option key={item._id} value={item.name}>
              {item.name}
            </option>
          })
        }
      </select>
      <button>Find Homes</button>
    </div>
  )
}


export default FindHomes