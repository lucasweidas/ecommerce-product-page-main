import { useCart } from '../../Context/CartContext';
import { AnimatePresence } from 'framer-motion';
import { useOverlay } from '../../Context/OverlayContext';
import Basket from './Basket';

export default function Cart() {
  const cart = useCart();
  const { overlay, onOverlayChange } = useOverlay();
  const showCart = overlay === 'cart';
  const totalQuantity = getTotalQuantity(cart);
  const isCartEmpty = totalQuantity === 0;

  function handleCartToggle() {
    onOverlayChange(showCart ? null : 'cart');
  }

  return (
    <div className="cart">
      <button
        className="button button-cart"
        onClick={handleCartToggle}
        aria-label="Toggle cart"
        aria-haspopup="true"
        aria-expanded={showCart}
        aria-controls="basket"
      >
        <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
            fill="currentColor"
            fillRule="nonzero"
          />
        </svg>
        {!isCartEmpty && <span className="cart__count">{totalQuantity}</span>}
      </button>
      <AnimatePresence initial={false}>{showCart && <Basket cart={cart} isCartEmpty={isCartEmpty} />}</AnimatePresence>
    </div>
  );
}

function getTotalQuantity(cart) {
  return cart.reduce((total, { quantity }) => total + quantity, 0);
}
