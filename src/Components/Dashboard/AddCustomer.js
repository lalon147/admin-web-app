import React from 'react'
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddCustomer = () => {
    const nav=useNavigate()
    const handleSubmit=(e)=>{
     e.preventDefault();
     const  form=e.target;
     const fullName=form.name.value;
     const phone=form.phone.value;
     const password=form.password.value;
     const role=form.role.value;    
     const user={
         fullName,password,phone,role
     }

     fetch("http://localhost:5000/users",{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(user)
     }).then(res=>res.json()).then(data=>{
        console.log(data);
        toast.success("USER ADDED SUCCESSFULLY")
        nav("/dashboard/all-customer")
     })

    }
  return (
    <div  className='flex justify-center items-center my-10'>
    <form onSubmit={handleSubmit} className='space-y-4'>
      <input name='name' className='p-2 w-full' placeholder='Name of the user'/>
      <input name="password" className='p-2 w-full' placeholder='Put the Passsword of the user '/>
      <input name="phone" className='p-2 w-full' placeholder='Put  the phone Number of the user with country code eg:+880152215893'/>
      <input name="role" className='p-2 w-full' defaultValue={"user"}  placeholder='Put the role eg:user'/>
      

      <button className='btn  btn-primary w-full' type='submit'>Add</button>
</form>

     </div>
  )
}

export default AddCustomer