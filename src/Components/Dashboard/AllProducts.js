import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const AllProducts = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/products").then(res=>res.json()).then(data=>{
          setProducts(data);   
          console.log(data)      
        })
      },[])
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




