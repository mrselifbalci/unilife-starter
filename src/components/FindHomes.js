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
      <form className='find-homes-container'>
        <select className='select-city-homes' required>
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
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7+</option>
        </select>
        <button className="submit" type="submit" value="submit">Find Homes</button>
      </form>
  )
}


export default FindHomes