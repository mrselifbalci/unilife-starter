import axios from 'axios';
import React from 'react'
import { useParams } from 'react-router-dom'
import Banner from '../../Components/Banner/Banner'


function CityDetails() {
  const baseUrl = "https://unilife-server.herokuapp.com"

  // https://unilife-server.herokuapp.com/properties/city/633a96b96893d471a68cc891

  //create state for total property count
  const [totalProperties, setTotalProperties] = React.useState(0)

  //create state for properties
  const [properties, setProperties] = React.useState([])

  const {cityId} = useParams();
  console.log(cityId);

  //call api to get city details
  React.useEffect (
    ()=>{
      // console.log(`${baseUrl}/cities/${cityId}`)
      axios.get(`${baseUrl}/properties/city/${cityId}`)
      .then(res=>{
        console.log(res)
        setTotalProperties(res.data.total);
        setProperties(res.data.response)
      })
    }, []
  
  )

  return (
    <div className='city-details-container'>
      <Banner />
    </div>
  )
}

export default CityDetails