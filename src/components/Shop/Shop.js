import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Shop.css"

const Shop = () => {
    //useState for products
    const [products, setProducts] = useState([])
    //useState for carts
    const [cart, setCart] = useState([])

    //useState for filterProduct 
    const [filterProduts, setFilterProducts] = useState([]);
    //useEffect for products data fetch
    useEffect(() => {
        fetch("./products.JSON")
            .then(res => res.json())
            .then(data => {
                setFilterProducts(data)
                setProducts(data)
            })
    }, [])

    //useEffect for localStorage data fetch
    useEffect(() => {
        if (products.length) {
            const addedProduct = getStoredCart();
            //    console.log(addedProduct);
            const storedCart = [];
            for (const key in addedProduct) {
                // console.log(key)
                // console.log(products)
                let foundProduct = products.find(product => product.key === key);
                // console.log(key,foundProduct)
                if (foundProduct) {
                    const quantity = addedProduct[key];
                    foundProduct.quantity = quantity;
                    // console.log(foundProduct)
                    storedCart.push(foundProduct);
                }
            }

            setCart(storedCart)
        }

    }, [products])

    // onclick handler add to cart 
    const handlerAddToCart = (product) => {
        // console.log("product click",product);
        const newCart = [...cart, product];
        setCart(newCart)
        // add to localStorage as database
        addToDb(product.key)
    }

    // search handler 
    const searchHandler = (event) => {
        const searchText = (event.target.value);
        const matchedProduct = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()))
        // console.log(matchedProduct);
        setFilterProducts(matchedProduct);
    }


    return (
        <div>
            <div className="search-container">
                <input onChange={searchHandler} type="text" />
            </div>
            <div className="product-container">
                <div className="product">
                    <h1>Products:{products.length}</h1>
                    {
                        filterProduts.map(product => <Product
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

        </div>
    );
};

export default Shop;