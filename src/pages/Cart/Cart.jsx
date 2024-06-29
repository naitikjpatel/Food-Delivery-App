import React from 'react'
import './Cart.css'
import { useContext } from 'preact/hooks'
import { StoreContext } from '../../context/StoreContext'
const Cart = () => {
  //cartItem access from the context
  const {cartItems,food_list,removeFromCart}=useContext(StoreContext);
  return (
    <div className='cart'>
        <div className="cart-items">
          <div className="cart-items-title">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <br/>
          <hr/>
          
        </div>
    </div>
  )
}

export default Cart