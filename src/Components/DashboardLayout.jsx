import React, { useEffect, useState } from 'react'
import './CSS/DashboardLayout.css'
import { NavLink } from 'react-router-dom'
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
  return (
    <div className='dashboard-outer'>
         <div className={`sidebar ${sidebar ? 'open' : 'close'} `}>
              <div className="sidebar-logo">
                 <div className="logo-icon">D</div>
                 <span>Dashboard</span>
              </div>
              <div className="sidebar-tabs">
                <NavLink className="sidebar-tab-name " to='/dashboard'>  <LayoutDashboard /> <span>  Dashboard </span> </NavLink>
                 <NavLink className="sidebar-tab-name" to='/users'  >  <House />  <span> User </span> </NavLink>
                <NavLink className="sidebar-tab-name" to='/products'  >  <ShoppingCart /> <span>  Product </span> </NavLink>
                <NavLink className="sidebar-tab-name" to='/orders'  >  <CalendarArrowUp /> <span>  Order </span> </NavLink>
              {/* <NavLink className="sidebar-tab-name" to='/'  >  <HandPlatter /> Services</NavLink>
                <NavLink className="sidebar-tab-name" to='/'  >  <ShoppingCart /> Product</NavLink>
              <NavLink className="sidebar-tab-name" to='/'  >  <CalendarArrowUp /> Order</NavLink>
              <NavLink className="sidebar-tab-name" to='/'  >  <HandPlatter /> Services</NavLink> */}
              </div>
              <div className="sidebar-logout">
                       <div className='sidebar-logout-name'> <LogOut /> <span>LogOut</span></div>
              </div>
         </div>
         <div className="main">
              <div className="dashboard-header">
                   <div className="dashboard-header-left">
                           <button onClick={()=>setSidebar(!sidebar)} >  {sidebar ? <X />  :   <Menu />}  </button>
                           <h1>WelCome Back !Admin </h1>
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