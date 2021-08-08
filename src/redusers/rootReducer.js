import { combineReducers } from "redux";
import { addToCartReducer } from "./addToCartReducer";
import { productsReducer } from "./productsReducer";

export const rootReducer = combineReducers ({
    products: productsReducer,
    addToCart: addToCartReducer
})