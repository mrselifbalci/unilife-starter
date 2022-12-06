import axios from 'axios'
import React from 'react'
import CityCard from '../../Components/CityCard/CityCard'
import './Homepage.css'

function Homepage() {

  //create state for cities
  const [topCities, setTopCities] = React.useState([])

  //call api when the component loads
  React.useEffect(
    ()=>{
      //call api to get cities
      axios.get('https://unilife-server.herokuapp.com/cities')
      .then(res =>{
        console.log(res.data.response);
        setTopCities(res.data.response.slice(0,9))
      })
      .catch(err => console.log(err))
    },[]
  )

  return (
    <div className='homepage-container'>
      {/* {
        cities.map(item => <p>{item.name}</p>)
      } */}
      <h3>Student accomodations in our top cities</h3>
      <div className='top-cities-wrapper'>
        {
          topCities.map(item=> <CityCard city={item} 
                              cardStyle="top-card"
                              imageUrl={item.image_url}
                              imgWidth="400px"
                              imgHeight="300px"
                              txtColor="white"
                              imgBorder="24px"/>)
        }
      </div>
    </div>
  )
}

export default Homepage