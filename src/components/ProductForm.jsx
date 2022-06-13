import React, { useState } from 'react'

let initState = {
"title":"" ,
"gender":"" ,
"price":"" ,
"category":"",
"image":""
}

export default function ProductForm() {
    const [form, setForm] = useState(initState)
    const handlechange= e =>{
        const {name,value} = e.target
        // console.log(name, value);
        setForm({...form, [name]:value})
    }
    const {title, gender, price, category, image} = form

    function addProduct() {
        fetch('http://localhost:3000/products',{
            method: 'POST',
            body: JSON.stringify(form)
        })
        .then(res=>res.json())
        .then(console.log)
    }

  return (
    <div>
        <h2>Product Form</h2>
        <label htmlFor="title">Title</label>
        <input value={title} type="text" name="title" onChange={handlechange} />
        <br />
        <label htmlFor="gender">gender</label>
        <select value={gender} name="gender" onChange={handlechange} >
            <option value=""></option>
            <option value="male">male</option>
            <option value="female">female</option>
        </select>
        <br />
        <label htmlFor="price">Price</label>
        <input value={price} type="text" name="price" onChange={handlechange} />
        <br />
        <label htmlFor="category">category</label>
        <input value={category} type="text" name="category" onChange={handlechange} />
        <br />
        <label htmlFor="image">image</label>
        <input value={image} type="text" name="image" onChange={handlechange} />
        <br />
        <button onClick={addProduct}>ADD</button>
    </div>
  )
}
