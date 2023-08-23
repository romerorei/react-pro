import { useCallback, useContext } from "react";
import { ProductContext } from "./ProductCard";

import styles from '../styles/styles.module.css'

export interface PropsButtons {
  className?: string;
  style?: React.CSSProperties;
}

export const ProductButtons = ({ className, style }: PropsButtons) => {

  // TODO: maxCount
  const { increaseBy, counter, maxCount } = useContext( ProductContext );

  const isMaxReached = useCallback(
    () => !!maxCount && counter === maxCount,
    [counter, maxCount],
  )
  // TODO; isMaxReached = useCallBack, [ counter, maxCounter ]
  // TRUe si el count === maxCount
  // Flase si no lo es

  return (
    <div
      className={ `${styles.buttonsContainer} ${className}` }
      style={ style }
    >
      <button
          className={ styles.buttonMinus }
          onClick={ () => increaseBy( -1 ) }
          > - </button>

      <div className={ styles.countLabel }> { counter } </div>

      <button
        className={`${styles.buttonAdd}
                    ${ isMaxReached() && styles.disabled } ` }
        onClick={ () => increaseBy( +1 ) }> + </button>
    </div>
  );
}
