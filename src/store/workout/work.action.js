import axios from "axios";
import * as type from "./work.types"

export const getProduct = () =>(dispatch) => {
    dispatch({type: type.GET_PRODUCT_LOADING});

     
        return axios.get("https://sparta-fitness-database.vercel.app/Products")
        .then((res) => {
            dispatch({type: type.GET_PRODUCT_SUCCESS, payload: res.data})

        })
        .catch((err) => {
            dispatch({type: type.GET_PRODUCT_ERROR});

        })

}

export const getMeal = () =>(dispatch) => {
    dispatch({type: type.GET_PRODUCT_LOADING});

     
        return axios.get("https://api.spoonacular.com/food/products/search?query=pizza&apiKey=611483d2afef4877850fbe3b7f1f804b&number=8")
        .then((res) => {
            dispatch({type: type.GET_PRODUCT_SUCCESS, payload: res.data.products})

        })
        .catch((err) => {
            dispatch({type: type.GET_PRODUCT_ERROR});

        })

}