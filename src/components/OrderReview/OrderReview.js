import React from 'react';
import useCart from '../../hooks/useCart/useCart';
import useProducts from '../../hooks/useProducts/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
    const [products]=useProducts();
    const [cart,setCart] = useCart(products);
    //removeHandler product with key 
    const removeHandler = key =>{
        // console.log(key);
        const newCart = cart.filter(product=>product.key!== key);
        setCart(newCart)
        // remove from localStorage
        removeFromDb(key);
    }
    return (
        <div>
              <div className="product-container">
                <div className="product">
                    <h1>Products:{products.length}</h1>
                    {
                     cart.map(product=><ReviewItem 
                        product={product}
                        key = {product.key}
                        removeHandler={removeHandler}
                        ></ReviewItem>)
                    }
                </div>

                <div className="cart">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default OrderReview;