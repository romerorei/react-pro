import { useState } from 'react';
import { Product, ProductInCart } from '../interfaces/interfaces';


export const useShoppingCart = () => {

  const [ shoppingCart, setShoppingCart ] = useState<{ [key:string]: ProductInCart }>({});
  console.log(shoppingCart)

  const onProductCountChange = ({ count, product }: {count:number, product: Product}) => {
    console.log( count, product);

    setShoppingCart( oldShoppingCart => {

    const productInCart: ProductInCart = oldShoppingCart[product.id] || { ...product, count: 0 };

      if (Math.max( productInCart.count + count, 0 ) > 0) {
        productInCart.count += count;
        return {
          ...oldShoppingCart,
          [product.id]: productInCart
        }
      }

      // Borrar el producto
      const { [product.id]: toDelete, ...rest } = oldShoppingCart;
      return rest;
    })
  } // onProductCountChange

  return {
    onProductCountChange,
    shoppingCart
  }

}

