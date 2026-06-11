import React, { useEffect, useState } from 'react'
import './CSS/DashboardLayout.css'
import { NavLink , useNavigate } from 'react-router-dom'
import {LayoutDashboard,ShoppingCart,CalendarArrowUp,House,HandPlatter,LogOut,Menu,X ,ChevronDown} from 'lucide-react'
const DashboardLayout = ({children}) => {
  const [sidebar,setSidebar] = useState(true)
//   const [name ,setName] = useState(null)
//   const username = JSON.parse(localStorage.getItem('user')).name
//   console.log(username)
//   useEffect(()=>{
//       setName(username)
//   },[])
  // const handleMenu = ()=>{
  //   //  sidebar ? setSidebar(false) : setSidebar(true)    
    
  // }
  const navigate = useNavigate()
  const [loginPerson,setLoginPerson] = useState('')
  const [role,setRole] = useState('')
  useEffect(()=>{
    const token = localStorage.getItem('token')
    const user =  localStorage.getItem('userData')
    if(!token){
      navigate('/')
    }
    else{
      const LoginPerson = JSON.parse(user)
      setLoginPerson(LoginPerson.name)
      setRole(LoginPerson.role)
    }
  },[])
  const handleLogOut = ()=>{
      localStorage.removeItem('token')
      navigate('/')
  }

  const tabs = {
    admin:[
      {
        name : "Dashboard",
        path : "/dashboard",
        icon : <LayoutDashboard/>
      },
       {
        name : "Category",
        path : "/category",
        icon : <LayoutDashboard/>
      },
       {
        name : "Products",
        path : "/products",
        icon : <LayoutDashboard/>
      },
       {
        name : "Orders",
        path : "/orders",
        icon : <LayoutDashboard/>
      },
       {
        name : "Users",
        path : "/users",
        icon : <LayoutDashboard/>
      }
    ],
    customer : [
       {
        name : "My orders",
        path : "/my-orders",
        icon : <LayoutDashboard/>
      },
       {
        name : "Address",
        path : "/my-address",
        icon : <LayoutDashboard/>
      },
       {
        name : "Carts",
        path : "/my-carts",
        icon : <LayoutDashboard/>
      }
    ]
  }
  return (
    <div className='dashboard-outer'>
         <div className={`sidebar ${sidebar ? 'open' : 'close'} `}>
              <div className="sidebar-logo">
                 <div className="logo-icon">D</div>
                 <span>Dashboard</span>
              </div>
              <div className="sidebar-tabs">
                {
                    tabs[role]?.map((tab,index)=>(
                        <NavLink key={index} className="sidebar-tab-name " to={tab.path}> 
                        {tab.icon} 
                          <span>  {tab.name} </span> 
                          </NavLink>
                    ))
                }
                
                
              
              </div>
              <div className="sidebar-logout">
                       <div
                       onClick={handleLogOut}
                        className='sidebar-logout-name  '> <LogOut /> <span>LogOut</span></div>
              </div>
         </div>
         <div className="main">
              <div className="dashboard-header">
                   <div className="dashboard-header-left">
                           <button onClick={()=>setSidebar(!sidebar)} >  {sidebar ? <X />  :   <Menu />}  </button>
                           <h1>WelCome Back {loginPerson}</h1>
                   </div>
                    <div className="dashboard-header-right">
                           <div className="dashboard-admin-outer">
                               <div className="admin">AD</div>
                               <div className="admin-dropdown">
                                <p>Admin <ChevronDown /></p>
                                <span>Panel</span>
                               </div>
                           </div>
                   </div>

              </div>
              <div style={{color : "black"}} className="dashboard-content">
                      {children}
              </div>
         </div>
    </div>
  )
}

export default DashboardLayout