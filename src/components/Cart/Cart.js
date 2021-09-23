import React from 'react';
import "./Cart.css"

const Cart = (props) => {
    // console.log(props.cart)
    const {cart} = props;

    // for loop for total price
    // let total = 0;
    // for (const product of cart){
    //    total = total + product.price;
    // }
    
    // reduce for total price 
    const reducer = (previous,current)=>previous + current.price;
    const total = cart.reduce(reducer,0);

    return (
        <div>
            <h1>Order Summary</h1>
            <p>Items Oredered:{props.cart.length} </p>
            <h3>TotalPrice:${total}</h3>
        </div>
    );
};

export default Cart;