import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';
import "../styles/custom-styles.css"
import { products } from '../data/products';
import { useShoppingCart } from '../hooks/useShoppingCart';



export const ShoppingPage = () => {

  const { onProductCountChange, shoppingCart } = useShoppingCart();

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap'
      }}>

         {
           products.map( product => (

            <ProductCard
              key={product.id}
              product={ product }
              className="bg-dark text-white"
              onChange={ onProductCountChange }
              value={ shoppingCart[product.id]?.count || 0 }
            >
              <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0,2)' }}/>
              <ProductTitle className="text-bold" title={product.title}/>
              <ProductButtons className="custom-buttons"/>
            </ProductCard>

           ))
         }


      </div>
        { Object.keys(shoppingCart).length > 0 && (
          <div className="shopping-cart" style={{ display: ''}}>
                { Object.keys( shoppingCart ).map( product => (
                    <ProductCard
                      key={shoppingCart[product].id}
                      product={ shoppingCart[product] }
                      className="bg-dark text-white"
                      style={{ width: '100px' }}
                      onChange={ onProductCountChange }
                      value={ shoppingCart[product].count }
                    >
                      <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0,2)' }}/>
                      <ProductTitle className="text-bold" title={shoppingCart[product].title}/>
                      <ProductButtons
                        className="custom-buttons"
                        style={{
                          display: 'flex',
                          justifyContent: 'center'
                        }}
                      />
                    </ProductCard>
                  ))
                }
          </div>
        )}
         <code>
           {JSON.stringify( shoppingCart, null, 5 )}
         </code>
    </div>
  )
}
