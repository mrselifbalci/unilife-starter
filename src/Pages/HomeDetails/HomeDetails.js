import React from 'react'
import { useParams } from 'react-router-dom'
import './HomeDetails.css'
import {AiOutlineLeft} from 'react-icons/ai'


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