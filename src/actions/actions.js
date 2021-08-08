import { ADD_PRODUCTS, GET_PRODUCTS } from "../redusers/types";
import { URL_ADD_PRODUCTS, URL_GET_PRODUCTS } from "./constans";

export function getProducts(){
    return async dispatch => {
        var request = new XMLHttpRequest();
        request.open('GET', URL_GET_PRODUCTS, true);
        request.onload = () => {
            var response = JSON.parse(request.response);
            dispatch({type: GET_PRODUCTS, payload: response})
        }
        request.send()
    }
}

export function addProducts(selectedProducts){
    return async dispatch => {
        if (!Object.keys(selectedProducts.products).length){
            return 0
        }
        let pid
        var formdata = new FormData();
        for( pid in selectedProducts.products ) {
            formdata.set(`product[${pid}]`,selectedProducts.products[pid])
        }
        var request = new XMLHttpRequest();
        request.open("POST", URL_ADD_PRODUCTS, true);
        request.addEventListener( 'load', ( event ) => {
            var resp  = JSON.parse(request.response)
            dispatch({type: ADD_PRODUCTS, payload: resp})
        } );
        request.send(formdata);
    }
}