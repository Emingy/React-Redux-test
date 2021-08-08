import { ADD_PRODUCTS } from "./types"

const initialState = {
    response: []
}

export const addToCartReducer = (state=initialState, action) => {
    switch (action.type){
        case ADD_PRODUCTS:
            return { ...state, response: action.payload }
        default: return state
    }
}