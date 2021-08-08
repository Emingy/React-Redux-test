import React from 'react';
import {connect, useDispatch, useSelector} from 'react-redux';
import { getProducts } from '../actions/actions';
import Product from './Product';



export default ({ products, setTotalPrice, totalPrice })=>{
    if(!products.goods.length ){
        return <tr></tr>
    }
    return (
        products.goods.map((product,i)=>
            <Product product={product} setTotalPrice={setTotalPrice} totalPrice={totalPrice} key={i}/>
        )
    )

}
