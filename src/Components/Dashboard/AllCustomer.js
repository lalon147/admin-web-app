import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {HashLoader} from "react-spinners"

const AllCustomer = () => {
    const [users,setUsers]=useState([])
    useEffect(()=>{
     
        fetch("https://admin-web-app-taupe.vercel.app/all-users",{
          headers:{
            "authorization":`bearer ${localStorage.getItem("token")}`}
        })
         .then(res=>res.json())
         .then(data=>{
            setUsers(data)
            console.log(data)})
    },[])
    if(users.length===0){
      return <div className='flex justify-center items-center my-20'>
        <HashLoader
  color="#6d28d9"
  size={60}
/>
    </div>
    }
  return (
    <div className="overflow-x-auto">
  <table className="table w-full">
    
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Phone Number</th>
        <th>Role</th>
      </tr>
    </thead>
    <tbody>
           {
            users.length >0 && users?.map((user,indx)=>{
                 return  <tr key={user._id}>
                 <th>{indx+1}</th>
                 <td>{user.fullName}</td>
                 <td>{user.phone}</td>
                 <td>{user.role}</td>
               </tr>
            })
           } 
    </tbody>
  </table>
   <div className='flex justify-center items-center'>
   <Link to="/dashboard/add-a-customer" className='btn btn-xs btn-primary my-10' >Add a Customer</Link>
   </div>
</div>
  )
}

export default AllCustomer