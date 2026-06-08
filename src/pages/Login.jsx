import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const api_url = import.meta.env.VITE_API_URL
    const [formData,setFormData] = useState({
        email : "",
        password : ""
    })
    const navigate = useNavigate()
    const loginUser = async (e)=>{
        e.preventDefault()
        try {
            const res = await axios.post(`${api_url}/api/user/login`,formData)
            console.log(res)
            if(res.status==200){
                localStorage.setItem('token',res.data.token)
                navigate('/dashboard')
                alert('login Sucessfully')
                setFormData({
                    email : "",
                    password : ""
                })

            }
            
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <>
       <h1>Login</h1>
         <input 
         type="text" 
         name = "name"
         placeholder='Enter Email'
         onChange={(e)=>{setFormData({...formData,email:e.target.value})}}
         />
         <br /><br />
         <input 
         type="password" 
         name = "password"
         placeholder='Enter Password'
         onChange={(e)=>{setFormData({...formData,password : e.target.value})}}
         />
         <br /><br />
         <button onClick={loginUser}>Login</button>
    </>
  )
}

export default Login