import React from 'react'
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const nav=useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault()
        const  form=e.target;
        const name=form.name.value;
        const price=form.price.value;
        const img=form.photo.value;
        const category=form.category.value
        const product={
            name,price,img,category
        }
        fetch("http://localhost:5000/products",{
            method:"POST",
            headers:{
                "content-type":"application/json",
                "authorization":`bearer ${localStorage.getItem("token")}`
            },
            body:JSON.stringify(product)
        }).then(res=>res.json()).then(data=>{
            toast.success("Product added successfully")
            nav("/dashboard/all-products")
            console.log(data);
        })
    }
  return (
         <div  className='flex justify-center items-center my-10'>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <input name='name' className='p-2 w-full' placeholder='Name of the product'/>
          <input name="photo" className='p-2 w-full' placeholder='Put the Image Link of the Product'/>
          <input name="price" className='p-2 w-full' placeholder='Put the Price of the product'/>
          <input name="category" className='p-2 w-full' placeholder='Put the category of the product'/>
          

          <button className='btn  btn-primary w-full' type='submit'>Add</button>
    </form>

         </div>
  )
}

export default AddProduct