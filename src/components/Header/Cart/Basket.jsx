import { motion } from 'framer-motion';
import BasketItem from './BasketItem';

export default function Basket({ cart, isCartEmpty }) {
  return (
    <motion.div className="basket" id="basket" variants={slideIn} initial="hidden" animate="visible" exit="exit">
      <div className="basket__wrapper">
        <span className="w-700 clr-blue-9">Cart</span>
      </div>
      <div className="basket__wrapper">
        {isCartEmpty ? (
          <p className="w-700 clr-blue-6">Your cart is empty.</p>
        ) : (
          <div className="basket__container">
            <div className="basket__items">
              {cart.map(item => (
                <BasketItem key={item.productId} item={item} />
              ))}
            </div>
            <button className="button button-orange">Checkout</button>
          </div>
        )}
      </div>
    </motion.div>
  );
}

const slideInTransition = { duration: 0.25, ease: 'easeOut' };
const slideInHidden = { opacity: 0, y: '-10%' };
const slideIn = {
  hidden: slideInHidden,
  visible: {
    opacity: 1,
    y: '0%',
    transition: slideInTransition,
  },
  exit: {
    ...slideInHidden,
    transition: slideInTransition,
  },
};
