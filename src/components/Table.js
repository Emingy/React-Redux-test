import React from 'react';
import {connect, useDispatch, useSelector} from 'react-redux';
import { getProducts } from '../actions/actions';
import Products from './Products';



const Table = ({setTotalPrice, totalPrice})=>{
    const dispatch = useDispatch()
    window.addEventListener("load", () => dispatch(getProducts()));
    const products = useSelector(state => state.products.products)
    return (
        <table className="table table-bordered table-responsive border-primary">
            {products.map((product, i) => {
                return (
                    <tbody key={i}>
                        <tr>
                            <th colSpan="5" rowSpan="1">
                                <h1 className="text-center">{product.rname}</h1>
                            </th>
                        </tr>
                        <tr>
                            <th>Id</th>
                            <th>Название товара</th>
                            <th>Цена</th>
                            <th>Количество</th>
                            <th>Сумма</th>
                        </tr>
                        <Products products={product} setTotalPrice={setTotalPrice} totalPrice={totalPrice}/>
                    </tbody>
                )
            })}

        </table>
            
    )

}

const mapStateToProps = state => {
    return {
        syncProducts: state.products.products
    }
}


export default connect(mapStateToProps, null)(Table)