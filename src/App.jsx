import React from 'react'
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Signup from './pages/Signup'
import Category from './pages/Category'
import Orders from './pages/Orders'
import Products from './pages/Products'
const App = () => {
  return (
    <Router>
         <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/category' element={<Category/>}/>
            <Route path='/orders' element={<Orders/>}/>
            <Route path='/products' element={<Products/>}/>
           

            
         </Routes>
     </Router>
    
  )
}

export default App