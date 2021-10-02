import React from 'react';

const ReviewItem = (props) => {
    const {name,price,quantity,key} = props.product;
    const {removeHandler}=props;
    return (
        <div className="product-info">
            <h5 className="product-header">{name}</h5>
            <h5>Price: {price} </h5>
            <h6>quantity : {quantity}</h6>
            <button onClick={()=>removeHandler(key)} className="purchase-btn">Remove</button>
        </div>
    );
};

export default ReviewItem;