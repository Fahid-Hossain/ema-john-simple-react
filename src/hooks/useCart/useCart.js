import { useState } from "react";
import { useEffect } from "react";
import { getStoredCart } from "../../utilities/fakedb";

const useCart = (products) => {
    const [cart, setCart] = useState([])
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

    return [cart,setCart];

}
export default useCart;