import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceoOrder'
import Footer from './components/Footer/Footer'
import { useState } from 'preact/hooks'
import LoginPopup from './components/LoginPopup/LoginPopup'
const app = () => {
  //login popup mate state varible banavyo
  const[showLogin,setShowLogin]=useState(false);
  return (
    <>
    {
      showLogin ? <LoginPopup  setShowLogin={setShowLogin}/> :<></>
    }
    <div className='app'>
        <Navbar setShowLogin={setShowLogin}/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>

          <Route path='/cart' element={<Cart/>}></Route>

          <Route path='/order' element={<PlaceOrder></PlaceOrder>}></Route>
        </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default app