import React, { useState } from 'react'
import axios from 'axios'

const Signup = () => {
    const api_url = import.meta.env.VITE_API_URL
    const [formData,setFormData] = useState({
        name : "",
        email : "",
        password : "",
        role : "customer"
    })
    const SignupUser = async (e)=>{
        e.preventDefault()
      
        try {
            const res = await axios.post(`${api_url}/api/user/register`,formData)
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }
  return (
   <>
    <h1>SignUp page</h1>

    <input 
    type="text" 
    name = "name"
    placeholder='Enter Your Name'
    onChange={(e)=>{setFormData({...formData,name:e.target.value})}}
    
    />
    <br /><br />
      <input 
    type="email" 
    name = "email"
    placeholder='Enter Your Email'
    onChange={(e)=>{setFormData({...formData,email:e.target.value})}}
    
    />
    <br /><br />
      <input 
    type="password" 
    name = "password"
    placeholder='Enter Your Password'
    onChange={(e)=>{setFormData({...formData,password:e.target.value})}}
   
    />
    <br /><br />
    <button onClick={SignupUser} >SignUP</button>

     
   </>
  )
}

export default Signup