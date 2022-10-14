import React from 'react'
import '../stylesheets/CityCard.css'

function CityCard({item}) {

  return (
      <div className='card' key={item._id} style={{backgroundImage:`url('${item.image_url}')`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"}}>
        <div className="card-overlay"></div>
        <h2 className='city-name'>{item.name}</h2>
        <p className='number-properties'>{item.property_count} properties</p>
      </div>
  )
}

export default CityCard