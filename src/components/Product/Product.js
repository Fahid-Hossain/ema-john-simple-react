import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import "./Product.css"
import Rating from 'react-rating';

const Product = (props) => {
    const product = props.product;
    //destructuring 
    const {name,img,seller,price,stock,star}=product;
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
            <Rating initialRating={star} readonly   emptySymbol="far fa-star icon-color" fullSymbol="fas fa-star icon-color"></Rating>
            <br />
            <button onClick={()=>props.handlerAddToCart(product)} className="purchase-btn"><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>

            </div>

        </div>
    );
};

export default Product;