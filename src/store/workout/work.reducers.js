import { GET_PRODUCT_LOADING, GET_PRODUCT_SUCCESS, GET_PRODUCT_ERROR } from "./work.types";


const init = {
    loading: false,
    error: "",
    product: [],
}


export const productReducer = (state = init, {type, payload}) => {
  switch (type) {
    case GET_PRODUCT_ERROR: {
        return {
            ...state,
            loading:false,
            error: payload,
        }
    }
    case GET_PRODUCT_LOADING: {
        return {
            ...state,
            loading:true,
            error: false,
        }
    }
    case GET_PRODUCT_SUCCESS: {
        return {
            ...state,
            loading:false,
            product: payload,
        }
    }
    default: {
        return state;
    }
  }  
}