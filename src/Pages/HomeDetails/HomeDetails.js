import React from 'react'
import { useParams } from 'react-router-dom'
import './HomeDetails.css'
import {AiOutlineLeft, AiOutlineCheck} from 'react-icons/ai'
import axios from 'axios'
import favorite from '../../assets/Favorite.svg'
import BedroomPrices from '../../Components/BedroomPrices/BedroomPrices'
import PropertyImages from './../../Components/PropertyImages/PropertyImages';


function HomeDetails() {
  const baseUrl = "https://unilife-server.herokuapp.com"

  const {homeId} = useParams();
  //console.log(homeId);

  //create state for property info
  const [property, setProperty] = React.useState([])

  
  React.useEffect(
    ()=>{
      //call api to get property details
      axios.get(`${baseUrl}/properties/${homeId}`)
      .then(res=>{
        // console.log(res.data)
        setProperty(res.data)
      })
      .catch(err=>console.log(err))
    }, []
  )

  return (
    <div className='home-detail-container'>
      <div className='back-to-search-container'>
        <AiOutlineLeft />
        <p>Back to Search</p>
      </div>
      <div className='home-detail-wrapper'>
        <div className='home-detail-left-container'>
          <div className='home-detail-images'>
            <PropertyImages property={property} />
          </div>
          <div className='description-container'>
            <h4>Description</h4>
            <p>{property.property_description}</p>
          </div>
          <div className='features-container'>
            <h4>Key Features</h4>
            {
              property?.key_features?.map(item=> <p><AiOutlineCheck key={property._id}/>&nbsp;{item}</p>)
            }
          </div>
        </div>
        <div className='home-detail-right-container'>
          <div className='address-details-container'>

          </div>
          <div className='button-container'>
            <div className='shortlist-container'>
              <img src={favorite} alt="heart icon" />
              <p>Shortlist</p>
            </div>
            <button>Book Viewing</button>
          </div>
          <div className='bedroom-price-container'>
            <h4>Bedroom Prices</h4>
            <div className='price-wrapper'>
              <p>{property?.bedroom_prices?.bedroom_one}</p>              
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default HomeDetails