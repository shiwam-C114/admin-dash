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
            setLoading(false)
            console.log(data)
        }
        )
    }
    useEffect(() => {
      paintPage()
    }, [])
    
    function Sort() {
      let array = Data
      // array.sort()
      console.log("in");
      console.log(array);
    }

  return (
    <div className='parent'>
        <h2>Product Listing</h2>
        <br />
        <div className="sort-filter-holder">
          <label htmlFor="sort" onClick={Sort}>sort</label>
          <select name="" id="">
            <option value="" onClick={Sort}>default</option>
            <option value="" onClick={Sort}>price: high to low</option>
            <option value="" onClick={()=>{Sort(false)}}>price: low to high</option>
          </select>
          
          <button onClick={()=>{paintPage()}}>Refresh</button>
        </div>
        <div className="cardHolder">
          {Loading ? "Loading..." : Data.map( ele => < Card ele={ele} /> )}
        </div>
    </div>
  )
}
