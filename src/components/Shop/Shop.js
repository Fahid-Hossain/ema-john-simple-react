import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import "./Shop.css"

const Shop = () => {
    //useState
    const [products,setProducts]=useState([])
    //useEffect 
    useEffect(()=>{
        fetch("./products.JSON")
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div className="product-container">
            <div className="product">
                <h1>Products:{products.length}</h1>
                {
                    products.map(product=><Product product={product} key={product.key}></Product>)
                }
            </div>

            <div className="cart">
                <h1>Order Summary</h1>
            </div>
        </div>
    );
};

export default Shop;