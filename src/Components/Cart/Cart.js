import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../context/UserContext';
import {HashLoader} from "react-spinners"

const Cart = () => {
    const [cart,setCart]=useState(null);
    const {user}=useContext(AuthContext);
    
    useEffect(()=>{
       if(user?.phoneNumber.length>10){
        const phone=user.phoneNumber.slice(3,14);console.log(phone)
        fetch(`https://admin-web-app-taupe.vercel.app/cart?phone=${phone}`)
        .then(res=>res.json()).then(data=>{
            console.log(data)
            setCart(data);
        }).catch(error=>console.log(error))
       }
       else{
             return 
       }
       if(!cart){
        return <HashLoader size={60} color="#6d28d9"></HashLoader>
       }
    },[user]);
    const handleDelete=(id)=>{
         const confirm=window.confirm("Are you sire you want to delete")
         if(confirm){
            fetch(`https://admin-web-app-taupe.vercel.app/cart?id=${id}`,{
            method:"DELETE"
         }).then(res=>res.json()).then(data=>{
            toast.success("Product deleted Successfully")
            window.location.reload()
            console.log(data)})
         }
    }
  return (
      <div className='flex justify-center items-center'>
        <div className='my-10 '>
        {
            cart?.length > 0 && cart.map(product=>{
                return <div key={product._id} className="my-5 flex items-center">
                        <div>
                            <img className='w-12 h-12 rounded-full' src={product.image} alt=""/>
                        </div>
                        <div className='ml-2'>
                            <p>NAME:{product.name}</p>
                            <p>PRICE:${product.price}</p>
                            <button onClick={()=>handleDelete(product._id)} className='btn btn-xs btn-primary'>Delete</button>        
                        </div>
                        
                       </div>
            })
        }
    </div>
      </div>
  )
}

export default Cart