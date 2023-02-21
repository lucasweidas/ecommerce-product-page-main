export default function QuantityController({ quantity, onChangeQuantity }) {
  function handleChangeQuantity({ target }) {
    if (target.id === 'button-plus') {
      onChangeQuantity(quantity + 1);
    } else if (target.id === 'button-minus') {
      onChangeQuantity(quantity > 1 ? quantity - 1 : 1);
    }
  }

  return (
    <div className="quantity-controller">
      <button className="button hover--opacity-06" id="button-minus" aria-label="Decrease product quantity" onClick={handleChangeQuantity}>
        <svg width="12" height="4" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <defs>
            <path
              d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
              id="a"
            />
          </defs>
          <use fill="#FF7E1B" fillRule="nonzero" xlinkHref="#a" />
        </svg>
      </button>
      <span className="w-700 clr-blue-9" aria-live="polite" aria-label={`Current product quantity is ${quantity}`}>
        {quantity}
      </span>
      <button className="button hover--opacity-06" id="button-plus" aria-label="Increase product quantity" onClick={handleChangeQuantity}>
        <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <defs>
            <path
              d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z"
              id="b"
            />
          </defs>
          <use fill="#FF7E1B" fillRule="nonzero" xlinkHref="#b" />
        </svg>
      </button>
    </div>
  );
}
