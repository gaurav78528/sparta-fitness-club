import axios from "axios";
import * as type from "./work.types"

export const getProduct = () =>(dispatch) => {
    dispatch({type: type.GET_PRODUCT_LOADING});
        return axios.get("https://fitness-handler.vercel.app/Products")
        .then((res) => {
            dispatch({type: type.GET_PRODUCT_SUCCESS, payload: res.data})
        })
        .catch((err) => {
            dispatch({type: type.GET_PRODUCT_ERROR});
        })
}

export const getMeal = () =>(dispatch) => {
    dispatch({type: type.GET_PRODUCT_LOADING})  
        return axios.get("https://fitness-handler.vercel.app/Meal")
        .then((res) => {
            dispatch({type: type.GET_PRODUCT_SUCCESS, payload: res.data})

        })
        .catch((err) => {
            dispatch({type: type.GET_PRODUCT_ERROR});

        })

}

export const getPilot = () =>(dispatch) => {
    dispatch({type: type.GET_PRODUCT_LOADING})  
        return axios.get("https://fitness-handler.vercel.app/Pilot")
        .then((res) => {
            dispatch({type: type.GET_PRODUCT_SUCCESS, payload: res.data})

        })
        .catch((err) => {
            dispatch({type: type.GET_PRODUCT_ERROR});

        })

}