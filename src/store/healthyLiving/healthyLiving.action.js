import axios from "axios";
import {
  GET_DATA_LOADING,
  GET_DATA_SUCCESS,
  GET_DATA_ERROR,
} from "./healthyLiving.types";

export const getData = (cat) => async (dispatch) => {
  dispatch({ type: GET_DATA_LOADING });

  try {
    let res = await axios.get(
      `https://sparta-fitness-database.vercel.app/articles?category=${cat}`
    );
    dispatch({ type: GET_DATA_SUCCESS, payload: res.data });
  } catch (e) {
    dispatch({ type: GET_DATA_ERROR, payload: e.message });
  }
};
