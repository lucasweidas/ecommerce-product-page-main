import { createContext, useContext, useEffect, useState } from 'react';
import { getLocalStorage, updateLocalStorage } from '../util';

const ProductContext = createContext(null);
const PRODUCT_ID = 0;
const initialProduct = getLocalStorageProduct();

export default function ProductProvider({ children }) {
  const [product, setProduct] = useState(initialProduct);

  useEffect(() => {
    let ignore = false;

    (async function fetchProduct() {
      try {
        const response = await fetch('/data/products.json');
        const result = await response.json();
        if (ignore) return;
        setProduct(result.find(item => item.id === PRODUCT_ID));
        setLocalStorageProducts(result);
      } catch (e) {
        console.error(`Can't fetch product: ${e}`);
      }
    })();

    return () => void (ignore = true);
  }, []);

  return <ProductContext.Provider value={product}>{children}</ProductContext.Provider>;
}

export function useProduct() {
  return useContext(ProductContext);
}

function setLocalStorageProducts(products) {
  updateLocalStorage('products', products);
}

function getLocalStorageProduct() {
  const data = getLocalStorage();
  const products = data?.products;
  if (products) {
    return products.find(item => item.id === PRODUCT_ID);
  }
  return null;
}
