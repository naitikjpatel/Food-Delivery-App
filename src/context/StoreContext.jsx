import { createContext } from "preact";
import { food_list } from "../assets/assets";
import { useEffect, useState } from "preact/hooks";
export const StoreContext = createContext(null);
const StoreContextProvider = (props) => {
  //fodditem to addtocart mate
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    // if user add the item first time then we create the new entry. otherwise we just increment the count
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      //already product is there
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  // useEffect(()=>{
  //     console.log(cartItems);
  // },[cartItems])
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        //quantity >0 mate j
        let itemInfo = food_list.find((product) => product._id === item); //this mean product is avalible in cart
        totalAmount += itemInfo.price * cartItems[item];
      }
    }

    return totalAmount;
  };

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
