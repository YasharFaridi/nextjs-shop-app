import { createContext, useReducer } from "react";

export const CartContext = createContext();

const initialCartContextState = {
  cart: { cartItems: [] },
};

function reducer(state, action) {
  switch (action.type) {
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
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    default:
      return state;
  }
}

export function CartContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialCartContextState);
  const value = { state, dispatch };

  return (
    <CartContext.Provider value={value}> {children} </CartContext.Provider>
  );
}
