import React from 'react';
import "./Product.css"

const Product = (props) => {
    const product = props.product;
    //destructuring 
    const {name,img,seller,price,stock}=product;
    return (
        <div className="products">
            <div className="product-img">
                <img src={img} alt="" />
            </div>

            <div className="product-info">
            <h3 className="product-header">{name}</h3>
            <p>by: {seller}</p>
            <h2>${price}</h2>
            <p>only {stock} left in stock - order soon</p>
            <button onClick={()=>props.handlerAddToCart(product)} className="purchase-btn">add to cart</button>

            </div>

        </div>
    );
};

export default Product;