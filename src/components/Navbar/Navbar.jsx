import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { useState } from 'preact/hooks'
import { Link } from 'react-router-dom'
const Navbar = ({setShowLogin}) => {

    const [menu,setMenu]=useState("home");

  return (
    <div className='navbar'>
        
      <Link to='/'> <img src={assets.logo} alt="" className="logo" /></Link>
       <ul className="navbar-menu">
        <Link to='/' className={menu==="home"?"active":""} onClick={()=>setMenu("home")}>home</Link>
        <a href="#explor-menu" className={menu==="menu"?"active":""} onClick={()=>setMenu("menu")}>menu</a>
        <a href="#app-download" className={menu==="mobile-app"?"active":""} onClick={()=>setMenu("mobile-app")}>mobile-app</a>
        <a href="#footer" className={menu==="contact-us"?"active":""} onClick={()=>setMenu("contact-us")}>contact us</a>
       </ul>
       <div className="navbar-right">
            <img src={assets.search_icon} alt="" />
            <div className="navbar-search-icon">
               <Link to='/cart'> <img src={assets.basket_icon} alt="" /></Link>
                {/* dot for the user add the item to the cart then dot is visible otherwise it not visible */}
                <div className="dot"></div>
            </div>
            <button onClick={()=>setShowLogin(true)}>sign in</button>
       </div>
    </div>
  )
}

export default Navbar