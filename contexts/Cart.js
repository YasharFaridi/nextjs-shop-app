import { createContext, useReducer, useEffect, useState } from "react";
import Cookies from "js-cookie";

export const CartContext = createContext();

const initialCartContextState = {
  cart: { cartItems: [] },
};

function reducer(state, action) {
  switch (action.type) {
    case "INITIAL_CART":
      return { ...state, cart: action.payload };

    case "ADD_CART_ITEM": {
      const newItem = action.payload;
      const existingItem = state.cart.cartItems.find(
        (cartItem) => cartItem.id === newItem.id
      );
      const cartItems = existingItem
        ? state.cart.cartItems.map((cartItem) =>
            cartItem.id === existingItem.id ? newItem : cartItem
          )
        : [...state.cart.cartItems, newItem];

      Cookies.set("cart", JSON.stringify({ ...state.cart, cartItems }));

      return { ...state, cart: { ...state.cart, cartItems } };
    }

    case "REMOVE_CART_ITEMS": {
      const cartItems = state.cart.cartItems
        .map((cartItem) => {
          if (cartItem.id === action.payload.id) {
            return { ...cartItem, qty: cartItem.qty - 1 };
          }
          return cartItem;
        })
        .filter((cartItem) => cartItem.qty > 0);

      Cookies.set("cart", JSON.stringify({ ...state.cart, cartItems }));

      return { ...state, cart: { ...state.cart, cartItems } };
    }

    default:
      return state;
  }
}

export function CartContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialCartContextState);
  const [cartLoaded, setCartLoaded] = useState(false); // state برای loader
 
  useEffect(() => {
    const cookieCart = Cookies.get("cart")
      ? JSON.parse(Cookies.get("cart"))
      : { cartItems: [] };
    dispatch({ type: "INITIAL_CART", payload: cookieCart });
    setCartLoaded(true); 
  }, []);

  if (!cartLoaded) {
    return (
      <div className="p-4 text-center font-bold text-lg">
        <span className="loading loading-dots loading-xl"></span>
      </div>
    );
  }

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}
