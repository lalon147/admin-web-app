import React, { useContext } from 'react'
import image from "../../assets/login.svg"
import { useForm } from "react-hook-form";
import { AuthContext } from '../../context/UserContext';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const {setUpRecaptcha,logOut}=useContext(AuthContext);
  const nav=useNavigate()

  const onSubmit = data => {
    setUpRecaptcha(data.phone).then(result=>{
      const otp=window.prompt("Enter the OTP");console.log(otp)
      result.confirm(otp).then(result=>{
        const user=result.user;
        fetch("http://localhost:5000/verify-user",{
          method:"POST",
          headers:{
            "content-type":"application/json"
          },
          body:JSON.stringify(data)
        }).then(res=>res.json()).then(data=>{
          if(data.message==="AUTHORIZED"){
            fetch(`http://localhost:5000/jwt?phone=${data.phone}`).then(res=>res.json()).then(data=>{
              localStorage.setItem("token",data.token)
            })
            toast.success("USER SIGNED IN SUCCESSFULLY ");
            nav("/")
          }
          else{
            toast.error("PASSWORD OR PHONE NUMBER WAS INCORRECT TRY AGAIN ")
             logOut().then(res=>res.json())
          }
        })
      })
     }).catch(error=>console.log(error))
    
    console.log(data)
  }
  return (
    <div className='my-10 flex flex-col-reverse md:flex-row justify-evenly items-center'>
      <div>
         <img src={image} alt=""/>
      </div>
      <div>
      <form className="mx-4 w-full flex flex-col space-y-4" onSubmit={handleSubmit(onSubmit)}>     
              <input className='p-4 rounded-md' placeholder='Phone Number'  {...register("phone",{required:true})} /> 
              <input className='p-4 rounded-md' placeholder='Password'  {...register("password",{required:true})} /> 
              <input type="submit" className='btn btn-primary' />
              <div id="recaptcha-container"></div>
            </form>
      </div>
    </div>
  )
}

export default Login