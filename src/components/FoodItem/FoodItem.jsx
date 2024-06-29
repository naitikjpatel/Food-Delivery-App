import React from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { useContext, useState } from 'preact/hooks'
import { StoreContext } from '../../context/StoreContext'
const FoodItem = ({id ,name,price,description,image}) => {
  //const [itemCount,setItemCount]=useState(0); // each product mate aa state varible create thay che .to optimize karva mate storecontext api no use karishu

  const {cartItems,addToCart,removeFromCart,setCartItems}=useContext(StoreContext);
  return (
    <div className='food-item'>
        <div className="food-item-img-container">
            <img className='food-item-image' src={image} alt="" />
            {
              // this for the increment item and add to cart
              !cartItems[id]
              ? <img src={assets.add_icon_white} className='add' onClick={()=>addToCart(id)}/>
              :<div className='food-item-counter'>

                  <img src={assets.remove_icon_red} onClick={()=>removeFromCart(id)}/>     
                  <p>{cartItems[id]}</p>
                  <img src={assets.add_icon_green} onClick={()=>addToCart(id)}/>  
              </div>
            }
            {/* {
              // this for the increment item and add to cart
              !itemCount
              ? <img src={assets.add_icon_white} className='add' onClick={()=>setItemCount(prev=>prev+1)}/>
              :<div className='food-item-counter'>

                  <img src={assets.remove_icon_red} onClick={()=>setItemCount(prev=>prev-1)}/>     
                  <p>{itemCount}</p>
                  <img src={assets.add_icon_green} onClick={()=>setItemCount(prev=>prev+1)}/>  
              </div>
            } */}
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className="food-item-desc">{description}</p>
            <p className="food-item-price">${price}</p>
        </div>
    </div>
  )
}

export default FoodItem