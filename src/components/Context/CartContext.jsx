import { createContext, useContext, useReducer } from 'react';
import { getLocalStorage, updateLocalStorage } from '../util';

const CartContext = createContext(null);
const CartDispatchContext = createContext(null);
const initialCart = getLocalStorageCart();

export default function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(CartReducer, initialCart);

  return (
    <CartContext.Provider value={cart}>
      <CartDispatchContext.Provider value={dispatch}>{children}</CartDispatchContext.Provider>
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

export function useCartDispatch() {
  return useContext(CartDispatchContext);
}

function CartReducer(cart, action) {
  let nextCart;

  switch (action.type) {
    case 'added': {
      if (isAlreadyInCart(cart, action.productId)) {
        nextCart = cart.map(item => {
          if (item.productId !== action.productId) {
            return item;
          }
          return { ...item, quantity: item.quantity + action.quantity };
        });
      } else {
        nextCart = [
          ...cart,
          {
            productId: action.productId,
            quantity: action.quantity,
          },
        ];
      }
      break;
    }
    case 'deleted': {
      nextCart = cart.filter(item => item.productId !== action.productId);
      break;
    }
  }

  setLocalStorageCart(nextCart);
  return nextCart;
}

function isAlreadyInCart(cart, productId) {
  return cart.findIndex(item => item.productId === productId) !== -1;
}

function getLocalStorageCart() {
  const data = getLocalStorage();
  return data?.cart ?? [];
}

function setLocalStorageCart(cart) {
  updateLocalStorage('cart', cart);
}
