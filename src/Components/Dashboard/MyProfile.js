import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../../context/UserContext'

const MyProfile = () => {
   const {user}=useContext(AuthContext);
   useEffect(()=>{
      
   },[])
   return (
    <div>
        <h1 className='text-3xl text-center'>My Profile</h1>
        <p className='text-center text-2xl'>Phone Number :{user.phoneNumber}</p>

    </div>
  )
}

export default MyProfile