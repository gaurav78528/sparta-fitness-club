import axios from "axios";
import { GET_PRODUCT_LOADING, GET_PRODUCT_SUCCESS, GET_PRODUCT_ERROR } from "./work.types";


export const getProduct = () => async (dispatch) => {
    dispatch({type: GET_PRODUCT_LOADING});

    try {
        let response = await axios.get("http://localhost:8080/Products")
        dispatch({type: GET_PRODUCT_SUCCESS, payload: response.data})
       
    } catch (e) {
        dispatch({type: GET_PRODUCT_ERROR, payload: e.error});
    }
}