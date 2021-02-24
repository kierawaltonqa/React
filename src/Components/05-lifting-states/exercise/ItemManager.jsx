'use strict';

import Basket from "./Basket";
import Items from "./Items";
import { useState } from 'react';

const ItemManager = () => {

    const [basket, setBasket] = useState([]);

    const addToBasket = (data) => {
        setBasket(b => [...b, data]);
    }

    return (
        <>
            <Items addToBasket={addToBasket} />
            <Basket info={basket} />
        </>
    )
}
export default ItemManager;