'use strict';
import { useState } from 'react';

const Items = ({ addToBasket }) => {

    // destructuring the return of the use state
    const [productName, setProductName] = useState('');
    const [quantity, setQuantity] = useState(0);

    const add = (e) => {
        e.preventDefault();
        const d = {
            productName: productName,
            quantity: quantity
        }
        addToBasket(d);
        console.log("item has been added");
    }

    return (
        <form onSubmit={add}>
            <label>Enter Product Name:</label>
            <input
                type="text"
                value={productName}
                onChange={e => setProductName(e.target.value)}
            />
            <label>Enter Quantity:</label>
            <input
                type="number"
                value={quantity}
                onChange={e => setQuantity(e.target.value)}
            />
            <button type="submit">Add Product</button>
        </form>
    )

}
export default Items;