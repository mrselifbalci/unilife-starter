import React, {useEffect, useState} from 'react'
import axios from 'axios'
import '../stylesheets/SearchByCity.css'

function SearchByCity({baseUrl}) {

    const [city, setCity] = useState([])

    useEffect(()=>{
      axios.get(`${baseUrl}cities?limit=20`)
      .then(res =>{setCity(res.data.response)})
      .catch(err=>console.log(err))
    },[])
  
    return (
        <div className='city-container'>
            {
                city.map((item)=>{
                return <a href="/citydetails" key={item._id}>{item.name}</a>
                })
            }
        </div>
    )
  }


export default SearchByCity