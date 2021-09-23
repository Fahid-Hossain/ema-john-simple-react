import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Shop.css"

const Shop = () => {
    //useState for products
    const [products,setProducts]=useState([])
    //useState for carts
    const [cart,setCart]=useState([])
    //useEffect 
    useEffect(()=>{
        fetch("./products.JSON")
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    // onclick handler add to cart 
    const handlerAddToCart = (product)=>{
        // console.log("product click",product);
        const newCart = [...cart,product];
        setCart(newCart)
    }
    return (
        <div className="product-container">
            <div className="product">
                <h1>Products:{products.length}</h1>
                {
                    products.map(product=><Product
                         product={product} 
                         key={product.key}
                         handlerAddToCart={handlerAddToCart}
                         ></Product>)
                }
            </div>

            <div className="cart">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;