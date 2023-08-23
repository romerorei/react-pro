import { ProductCardProps } from "../components/ProductCard";
import { PropsTitle } from "../components/ProductTitle";
import { PropsImage } from '../components/ProductImage';
import { PropsButtons } from "../components/ProductButtons";

export interface Product {
  id: string,
  title: string,
  img?: string
}

export interface ProductContextProps {
  counter: number;
  product: Product;
  increaseBy: ( value: number ) => void;
  maxCount?: number;
}

export interface ProductCardHOCProps { // Esto es para los componentes basado en propiedas ej: <ProductCard.Title />
  ({ children, product }: ProductCardProps ):JSX.Element,
  Title:    ( Props: PropsTitle )  => JSX.Element,
  Image:    ( Props: PropsImage )   => JSX.Element,
  Buttons:  ( Props: PropsButtons ) => JSX.Element
}

export interface onChangeArgs {
  product: Product;
  count: number;
}

export interface ProductInCart extends Product {
  count: number
}

export interface InitialValues {
  count: number;
  maxCount?: number;
}

export interface ProductCardHandlers {
  count: number;
  isMaxCountReached: boolean;
  maxCount?: number;
  product: Product;

  increaseBy: ( value: number ) => void;
  reset: () => void;

}
