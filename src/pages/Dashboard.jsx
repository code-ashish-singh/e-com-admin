import React from 'react'
import DashboardLayout from '../Components/DashboardLayout'
import { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'

const Dashboard = () => {
     const token = localStorage.getItem('token')
     const navigate = useNavigate()
     const api_url = import.meta.env.VITE_API_URL 
     const verifyToken = async ()=>{
        try{

            const res = await axios.get(`${api_url}/api/user/check-toke`,
                {
                    headers : {
                        Authorization : `{token}`
                    }
                }
            )

        }catch(error){
            localStorage.removeItem('token')
            navigate('/')
        }
     }
    useEffect(()=>{
         
   
    if(!token){
        navigate('/')
    }
    else{
        verifyToken()
    }
    },[])
  return (
    <>
       <DashboardLayout>
           <h1>this is dashboard</h1>
       </DashboardLayout>
    </>
  )
}

export default Dashboard