import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { addProducts } from '../actions/actions';

const AddToCart = ({totalPrice})=>{
    const dispatch = useDispatch()
    const isAdded = useSelector(state => state.addToCart.response)
    if(Object.keys(isAdded).length > 0){
        console.log(isAdded)
    }
    var sums = Object.keys(totalPrice).map(product=> totalPrice[product].sum)
    const submitHandler = () => {
        var data = {
            products: {}
        }
        Object.keys(totalPrice).map(pid=> {
            if (totalPrice[pid].count>0){
                data.products[pid] = totalPrice[pid].count
            }
        })
        if(!Object.keys(data.products).length){
            return
        }
        dispatch(addProducts(data))
    }
    return (
        <div className="row bottom-0 bg-light border m-0 w-100 position-fixed align-items-stretch" style={{height: 5+"vh"}}>
            <div className="col-10 text-end">
                <p className="m-2"><b>Total price: </b>{
                    sums.length ? sums.reduce((a,b)=> a + b) : 0    
                }</p>
            </div>
            <div className="col-2">
                <button className="btn btn-primary m-1" onClick={submitHandler}>Add to cart</button>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        response: state.addToCart.response
    }
}


export default connect(mapStateToProps, null)(AddToCart)