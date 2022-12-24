import React from 'react';
import { getAuth, onAuthStateChanged, RecaptchaVerifier,signInWithPhoneNumber,  signOut, updateProfile} from "firebase/auth";
import app from "../firebase/firebase.config" 
import { createContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';


const auth=getAuth(app);
export const AuthContext=createContext();



const UserContext = ({children}) => {
     const [user,setUser]=useState(null);
     const [loading,setLoading]=useState(true);
       
       
      const setUpRecaptcha=(number)=>{
        const recaptchaVerifier=new RecaptchaVerifier('recaptcha-container', {}, auth)
         recaptchaVerifier.render()
        return signInWithPhoneNumber(auth,number,recaptchaVerifier)
      }
     
       const logOut=()=>{
        setLoading(true)
        localStorage.removeItem("token")
        return signOut(auth);
       }
       const handleUpdateProfile=(name,url)=>{
       return  updateProfile(auth.currentUser,{
            displayName:name,
            photoURL:url
        })
       }
       
       useEffect(()=>{
        
        const unsubscribe=()=>onAuthStateChanged(auth,(currentUer)=>{ 
              setUser(currentUer);
              setLoading(false);
        })
        return ()=>unsubscribe();
       },[])
      
       
  




    const authInfo={logOut,user,handleUpdateProfile,loading,setLoading,setUpRecaptcha}
    return (
        <div>
               <AuthContext.Provider value={authInfo}>
                {
                    children
                }
               </AuthContext.Provider>
        </div>
    );
};

export default UserContext;