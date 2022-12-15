import axios from "axios";
import * as type from "./work.types"

export const getProduct = () =>(dispatch) => {
    dispatch({type: type.GET_PRODUCT_LOADING});

     
        return axios.get("http://localhost:8080/Products")
        .then((res) => {
            dispatch({type: type.GET_PRODUCT_SUCCESS, payload: res.data})

        })
        .catch((err) => {
            dispatch({type: type.GET_PRODUCT_ERROR});

        })

}