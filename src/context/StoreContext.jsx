import { createContext } from "preact";
import { food_list } from "../assets/assets";
import { useEffect, useState } from "preact/hooks";
export const StoreContext=createContext(null);
const StoreContextProvider=(props)=>{

    //fodditem to addtocart mate
    const [cartItems,setCartItems]=useState({});

    const addToCart=(itemId)=>{
            // if user add the item first time then we create the new entry. otherwise we just increment the count
            if(!cartItems[itemId]){
                setCartItems((prev)=>({...prev,[itemId]:1}))
            }
            else{
                //already product is there
                setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
            }
    }

    const removeFromCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))

    }

    useEffect(()=>{
        console.log(cartItems);
    },[cartItems])

    const contextValue={
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;