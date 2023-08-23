import { useEffect, useRef, useState } from "react"
import { Product, onChangeArgs, InitialValues } from '../interfaces/interfaces';


interface useProductArgs {
  product: Product;
  onChange?: ( args: onChangeArgs ) => void;
  value?: number;
  initialValues?: InitialValues
}

export const useProduct = ({ onChange, product, value= 0, initialValues }: useProductArgs) => {

  const [ counter, setCounter ] = useState<number>( initialValues?.count || value );
  const isMounted = useRef(false);

  console.log(initialValues);

  const increaseBy = ( value: number ) => {

    let newValue = Math.max( counter + value, 0 )
    newValue = initialValues?.maxCount ? Math.min(newValue, initialValues?.maxCount) : newValue // esto solo va permitir que el count no se mayor al maxCount

    setCounter( newValue )
    onChange &&  onChange({ count: newValue, product });
  }

  const reset = () => {
    setCounter(initialValues?.count || value)
  }

  useEffect(() => {
    if ( !isMounted.current ) return;
    setCounter(value);
  }, [value])

  useEffect(() => {
    isMounted.current = true
    return () => {
      isMounted.current = false
    }
  }, [])


  return {
    counter: counter,
    increaseBy: increaseBy,
    isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
    maxCount: initialValues?.maxCount,
    reset: reset

  }

}


