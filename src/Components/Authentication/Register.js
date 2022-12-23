import React from 'react'
import image from "../../assets/register.svg"
import { useForm } from "react-hook-form";

const Register = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
  return (
    <div>
           <div>
           <img src={image} alt=""/>
           
           </div>
           <div>
           <form onSubmit={handleSubmit(onSubmit)}>
     
              <input  {...register("")} />
      
      
              <input {...register("exampleRequired", { required: true })} />
     
      
      
              <input type="submit" className='btn btn-primary' />
            </form>
           </div>
    </div>
  )
}

export default Register