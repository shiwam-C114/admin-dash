import React, { useState } from 'react'
import Card from './common/Card'

export default function ProductListing() {
    const [Data, setData] = useState()

    function paintPage() {
        fetch('http://localhost:3000/products')
        .then(res=>res.json())
        .then(data=>{
            setData(data)
        }
        )
    }

  return (
    <div>
        <h2>Product Listing</h2>
        <button onClick={paintPage}>p</button>
        {
            Data.map(ele => {
                <Card ele={ele} />
            })
        }
    </div>
  )
}
