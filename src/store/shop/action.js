import axios from "axios";
import * as type from "./actionType";

export const getAllgift = () => (dispatch) => {
  dispatch({ type: type.GET_GIFT_LOADING });
  return axios
    .get("https://sparta-fitness-database.vercel.app/gift")
    .then((res) => {
      // console.log(res.data);
      dispatch({ type: type.GET_GIFT_SUCCESS, payload: res.data });
    })

    .catch((err) => {
      dispatch({ type: type.GET_GIFT_FAILURE });
    });
};

export const getAllpassess = () => (dispatch) => {
  dispatch({ type: type.GET_PASSES_LOADING });
  return axios
    .get("https://sparta-fitness-database.vercel.app/passes")
    .then((res) => {
      // console.log(res.data);
      dispatch({ type: type.GET_PASSES_SUCCESS, payload: res.data });
    })

    .catch((err) => {
      dispatch({ type: type.GET_PASSES_FAILURE });
    });
};
