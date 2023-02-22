import { createContext, useContext, useEffect, useState } from 'react';
import { getLocalStorage, updateLocalStorage } from '../util';

const ProductContext = createContext(null);
const PRODUCT_ID = 0;
const initialProduct = getLocalStorageProduct();

export default function ProductProvider({ children }) {
  const [product, setProduct] = useState(initialProduct);

  useEffect(() => {
    const controller = new AbortController();

    (async function fetchProduct() {
      try {
        const response = await fetch('/data/products.json', { signal: controller.signal });
        const result = await response.json();
        setProduct(result.find(item => item.id === PRODUCT_ID));
        setLocalStorageProducts(result);
      } catch (e) {
        console.error(`${e}`);
      }
    })();

    return () => {
      controller.abort();
    };
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
