import React from 'react'
import { useParams } from 'react-router-dom'
import './HomeDetails.css'


function HomeDetails() {
  const baseUrl = "https://unilife-server.herokuapp.com"

  const {homeId} = useParams();
  console.log(homeId);

  return (
    <div className='home-detail-container'>
      HomeDetails
    </div>
  )
}

export default HomeDetails