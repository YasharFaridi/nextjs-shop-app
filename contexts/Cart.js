import { createContext, useReducer } from "react";

export const CartContext = createContext();

const initialCartContextState = {
  cart: { cartItems: [] },
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_CART_ITEM":
      const newItem = action.payload;
      const existingItem = state.cart.cartItems.find(
        (cartItem) => cartItem.id === newItem.id
      );
      const cartItems = existingItem
        ? state.cart.cartItems.map((cartItem) =>
            cartItem.slug_link === existingItem.slug_link ? newItem : cartItem
          )
        : [...state.cart.cartItems, newItem];
      return { ...state, cart: { ...state.cart, cartItems } };
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
