import React from 'react'
import  "./Card.css"
export default function Card({ele}) {
  return (
    <div className='card-frame'>
      <div className='info'>
        <h3>Title: {ele.title}</h3>
        <h3>Gender: {ele.gender}</h3>
        <h3>Price: ${ele.price}</h3>
        <h3>Category: {ele.category}</h3>
      </div>
      <div className="pic">
        <img src={ele.image} alt="" />
      </div>
    </div>
  )
}