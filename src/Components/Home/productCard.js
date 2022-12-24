import React, { useContext, useState } from 'react'
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../context/UserContext';

const ProductCard = ({product}) => {
     const {user}=useContext(AuthContext);
     console.log(user);

    
    const {name,price,img,category,rating,id}=product;
    const handleAddToCart=(id,name,price,image)=>{
        const cart={
            phone:user.phoneNumber.slice(3,14),
            product_id:id,
            name:name,
            price:price,
            image:image            
        }
        
        fetch("https://admin-web-app-taupe.vercel.app/add-to-cart",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(cart)
        }).then(res=>res.json()).then(data=>{
            toast.success("PRODUCT ADDED TO CART ")
            console.log(data)}).catch(error=>console.log(error))
    }
    
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{price}</p>
    <p>{category}</p>
    <p>{rating}</p>
    <div className="card-actions justify-center">
      <button onClick={()=>handleAddToCart(id,name,price,img)} className="btn btn-primary">Add To Cart</button>
    </div>
  </div>
</div>
  )
}

export default ProductCard