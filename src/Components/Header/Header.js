import React, { useContext } from 'react'
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/UserContext'

const Header = () => {
  const {user,logOut}=useContext(AuthContext);
  const nav=useNavigate()
  const handleLogOut=()=>{
    const confirm=window.confirm("Are Your Sure You Want To log Out ")
    if(confirm){
      logOut().then(res=>res.json())
      toast.success("USER SIGNED OUT SUCCESSFULLY")
      nav("/")

    }
  }
    const listItems=<React.Fragment>
                     <li><Link to="/">Home</Link></li> 
                    {
                      user ?  
                      <>
                      <li><Link to="/dashboard">Dashboard</Link></li>
                      <button onClick={handleLogOut} className='btn btn-ghost'>Logout</button>
                      <li><Link to="/cart">Cart</Link></li>  
                      </>
                      :
                     <>
                     <li><Link to="/login">Login</Link></li> 
                     <li><Link to="/register">Register</Link></li>
                     </>
                    } 
                    </React.Fragment>
  return (
    <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
         {
            listItems
         }
      </ul>
    </div>
    <a className="btn  normal-case text-xl">Carbon-Shop</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
       {
        listItems
       }
    </ul>
  </div>
  <div className="navbar-end">
    {/* here we can put the information of profile holder like profile picture and name ,phone number */}
  </div>
</div>
  )
}

export default Header