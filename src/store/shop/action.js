import axios from "axios";
import * as type from "./actionType";

export const getAllgift = () => (dispatch) => {
  dispatch({ type: type.get_Gift_loading });
  return axios
    .get("https://sparta-fitness-database.vercel.app/gift")
    .then((res) => {
      // console.log(res.data);
      dispatch({ type: type.get_Gift_success, payload: res.data });
    })

    .catch((err) => {
      dispatch({ type: type.get_Gift_failure });
    });
};

export const getAllpassess = () => (dispatch) => {
  dispatch({ type: type.get_Gift_loading });
  return axios
    .get("https://sparta-fitness-database.vercel.app/passes")
    .then((res) => {
      // console.log(res.data);
      dispatch({ type: type.get_Gift_success, payload: res.data });
    })

    .catch((err) => {
      dispatch({ type: type.get_Gift_failure });
    });
};
