import { useCartDispatch } from '../../Context/CartContext';
import { useProduct } from '../../Context/ProductContext';
import { formatPrice } from '../../util';

export default function BasketItem({ item }) {
  const product = useProduct();
  const dispatch = useCartDispatch();
  const totalPrice = product.currentPrice * item.quantity;
  const thumbnail = product.images.small[0];

  function handleDeleteItem() {
    dispatch({
      type: 'deleted',
      productId: item.productId,
    });
  }

  return (
    <div className="basket__item">
      <img className="basket__thumbnail" src={thumbnail.url} alt="Fall Limited Edition Sneakers" />
      <div className="item__wrapper">
        <span className="clr-blue-6 hide-text-overflow">{product.name}</span>
        <span className="clr-blue-6 text-wrapper">
          <span>{formatPrice(product.currentPrice)}</span>
          <span>x {item.quantity}</span>
          <strong className="w-700 clr-blue-9">{formatPrice(totalPrice)}</strong>
        </span>
      </div>
      <button className="button button-remove" onClick={handleDeleteItem}>
        <svg width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <defs>
            <path
              d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
              id="a"
            />
          </defs>
          <use fill="#C3CAD9" fillRule="nonzero" xlinkHref="#a" />
        </svg>
      </button>
    </div>
  );
}
