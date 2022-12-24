import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {HashLoader} from "react-spinners"

const AllProducts = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch("https://admin-web-app-taupe.vercel.app/products").then(res=>res.json()).then(data=>{
          setProducts(data);   
          console.log(data)      
        })
      },[])
    if(products.length===0){
      return <div className='flex justify-center items-center my-20'>
      <HashLoader
color="#6d28d9"
size={60}
/>
  </div>
    }
  return (
    <div className="overflow-x-auto">
        <div className='flex justify-center my-10'>
  <Link to="/dashboard/add-a-product" className='btn btn-xs btn-primary'>Add a Product</Link>
  </div>
  <table className="table w-full">
    
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>price</th>
        <th>Rating</th>
      </tr>
    </thead>
    <tbody>
    {
    products.length >0 && products.map((product,indx)=>{
        return <tr key={product._id}>
        <th>{indx+1}</th>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>{product.ratings}</td>
      </tr>
    })
}
      
    </tbody>
  </table>
  <div className='flex justify-center my-10'>
  <Link to="/dashboard/add-a-product" className='btn btn-xs btn-primary'>Add a Product</Link>
  </div>
</div>
  )
}

export default AllProducts




