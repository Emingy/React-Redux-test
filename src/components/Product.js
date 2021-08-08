import React from 'react';
import { useState } from 'react';

export default ({ product, setTotalPrice, totalPrice })=>{
    const [amount, setCount] = useState(0)
    const [sum, setSum] = useState(0)
    const inputChangeHandler = (event) => {
        if(event.target.value>=0 && event.target.value){
            setCount(event.target.value)
            setSum(product.gprice*event.target.value)
            setTotalPrice({
                ...totalPrice,
                [event.target.id] : {
                    count: event.target.value,
                    pid: event.target.id,
                    sum: product.gprice*event.target.value
                }
            })
        }
    }
    return (
        <tr>
            <th>{product.gid}</th>
            <th>{product.gname}</th>
            <th>{product.gprice}</th>
            <th><input type="number" value={amount} id={product.gid} onChange={inputChangeHandler} />{product.ged}</th>
            <th>{sum}</th>
        </tr>
    )
}