import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/UserContext'

const MyProfile = () => {
   const {user}= useContext(AuthContext);
   const [role,setRole]=useState("")
   console.log(user)
   useEffect(()=>{
      if(user){
        fetch(`https://admin-web-app-taupe.vercel.app/users?phone=${user.phoneNumber.slice(3,14)}`)
        .then(res=>res.json()).then(data=>{
        console.log(data)
        setRole(data.role)
      }).catch(error=>console.log(error))
      }
      else{
        return
      }
   },[user])
   return (
    <div>
        <h1 className='text-3xl text-center'>My Profile</h1>
        <p className='text-center text-2xl'>Phone Number :{user?.phoneNumber}</p>
        <p className='text-center text-2xl'>ROLE :{role}</p>

    </div>
  )
}

export default MyProfile