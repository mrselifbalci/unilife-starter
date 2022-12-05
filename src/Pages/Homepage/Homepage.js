import axios from 'axios'
import React from 'react'

function Homepage() {

  //create state for cities
  const [cities, setCities] = React.useState([])

  //call api when the component loads
  React.useEffect(
    ()=>{
      //call api to get cities
      axios.get('https://unilife-server.herokuapp.com/cities')
      .then(res =>{
        console.log(res.data.response);
        setCities(res.data.response)
      })
      .catch(err => console.log(err))
    },[]
  )

  return (
    <div className='homepage-container'>
      {
        cities.map(item => <p>{item.name}</p>)
      }
    </div>
  )
}

export default Homepage