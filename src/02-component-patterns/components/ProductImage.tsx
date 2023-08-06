import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import noImage from '../assets/no-image.jpg'
import styles from '../styles/styles.module.css'

export interface PropsImage {
  className?: string;
  img?: string
  style?: React.CSSProperties;
}

export const ProductImage = ({ img, className, style }: PropsImage) => {
  const { product } = useContext( ProductContext );

  // let imgToShow: string;
  // if ( img ) {
  //   imgToShow = img;
  // } else if ( product.img ) {
  //   imgToShow = product.img
  // } else {
  //   imgToShow = noImage;
  // }

  const imgToShow: string = img || product.img || noImage;


  return (
    <img
      className={ `${styles.productImg}  ${ className }` }
      src={ imgToShow }
      alt="Product"
      style={ style }
    />
  )
}
