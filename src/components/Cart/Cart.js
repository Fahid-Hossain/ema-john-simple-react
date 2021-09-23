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


    const shipping = total/30;
    const tax = total/35;
    const grandTotal =(total+tax+shipping);
    return (
        <div>
            <h1>Order Summary</h1>
            <p>Items Oredered:{props.cart.length} </p>
            <h3>Price:${total.toFixed(2)}</h3>
            <h3>Shipping: ${shipping.toFixed(2)}</h3>
            <h3>Tax: ${tax.toFixed(2)}</h3>
            <h2>TotalPrice:{grandTotal.toFixed(2)}</h2>




        </div>
    );
};

export default Cart;