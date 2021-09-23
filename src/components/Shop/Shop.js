import React, { useEffect, useState } from 'react';
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
                <h1>Product:{products.length}</h1>
                {
                    products.map(product=>console.log(product))
                }
            </div>

            <div className="cart">
                <h1>Order Summary</h1>
            </div>
        </div>
    );
};

export default Shop;