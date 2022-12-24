import React, { useEffect, useState } from 'react'
import ProductCard from './productCard';

export const Home = () => {
  const [products,setProducts]=useState([]);
  useEffect(()=>{
    fetch("products.json").then(res=>res.json()).then(data=>{
      setProducts(data);
      
    })
  },[])
  const handleSearch=(e)=>{
   const wantedProducts=products.filter(pro=>{
    const name=pro.name.toLowerCase();
    return name.startsWith(e.target.value.toLowerCase())
   })
   setProducts(wantedProducts);
  }
  
  return (
    <div>
            <div className='flex  justify-center '>
            <input onChange={handleSearch} className='rounded-md w-72 pl-14 py-4 my-5' placeholder='Search Your products '/> 
            </div>

            <div className='w-full md:w-9/12 mx-auto my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 '>
              {
                products.map(product=><ProductCard key={product.id} product={product}></ProductCard>)
              }
            </div>
    </div>
  )
}
