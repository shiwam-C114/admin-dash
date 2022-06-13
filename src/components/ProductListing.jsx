import React, { useEffect, useState } from 'react'
import Card from './common/Card'

export default function ProductListing() {
    const [Data, setData] = useState()
    const [Loading, setLoading] = useState(true)
    function paintPage() {
        fetch('http://localhost:3000/products')
        .then(res=>res.json())
        .then(data=>{
            setData(data)
            setLoading(!Loading)
            console.log(data)
        }
        )
    }
    useEffect(() => {
      paintPage()
    }, [])
    

  return (
    <div className='parent'>
        <h2>Product Listing</h2>
        <br />
        {Loading
        ?
        "Loading..." 
        :
        Data.map((ele)=>< Card ele={ele} />)
        }
    </div>
  )
}
