import React, { useContext, useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom';
import Header from '../Components/Header/Header';
import { AuthContext } from '../context/UserContext';

const Dashboard = () => {
    const {user}= useContext(AuthContext);
    const [role,setRole]=useState("")
    console.log(user)
    useEffect(()=>{
       if(user){
         fetch(`http://localhost:5000/users?phone=${user.phoneNumber.slice(3,14)}`)
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
    <Header></Header>
    <div className="drawer drawer-mobile">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content   ">
        <Outlet></Outlet>
       
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80  text-base-content">
          <li>
            <Link to="/dashboard">My Profile</Link>
          </li>
          {
                role==="admin" && <>
                   <li><Link to="/dashboard/all-products">All products</Link></li>
                   <li><Link to="/dashboard/all-customer">Customer List</Link></li>
                </>
                 
          }
          
           
            
        </ul>
      </div>
    </div>
  </div>
  );
  
}

export default Dashboard