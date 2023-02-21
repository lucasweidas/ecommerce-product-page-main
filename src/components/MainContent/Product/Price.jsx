import { formatPrice } from '../../util';

export default function Price({ product }) {
  const { currentPrice, previousPrice, discount } = product;

  return (
    <div className="price">
      <div className="price__wrapper">
        <span className="fs-lg w-700 clr-blue-9" aria-label={`Current price with ${discount}% off is ${currentPrice} dollars each`}>
          {formatPrice(currentPrice)}
        </span>
        <span className="discount" aria-label={`Current discount is ${discount}%`}>
          {discount}%
        </span>
      </div>
      <span className="w-700 clr-blue-3 line-through" aria-label={`The previous price was ${previousPrice} dollars each`}>
        <del>{formatPrice(previousPrice)}</del>
      </span>
    </div>
  );
}
