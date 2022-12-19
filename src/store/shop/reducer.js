import {
  GET_GIFT_FAILURE,
  GET_GIFT_LOADING,
  GET_GIFT_SUCCESS,
  GET_PASSES_FAILURE,
  GET_PASSES_LOADING,
  GET_PASSES_SUCCESS,
} from "./actionType";

// reducer
const initstate = {
  isloading: false,
  isError: false,
  gift: [],
};
export const reducer = (state = initstate, { type, payload }) => {
  switch (type) {
    case GET_GIFT_LOADING: {
      return { ...state, isloading: true };
    }
    case GET_GIFT_SUCCESS: {
      const newdata = [...state.gift, payload];

      return { ...state, isloading: false, gift: newdata };
    }

    case GET_GIFT_FAILURE: {
      return { ...state, isError: true };
    }
    case GET_PASSES_LOADING: {
      return { ...state, isloading: true };
    }
    case GET_PASSES_SUCCESS: {
      // console.log(payload);
      const newdata = [...state.gift, payload];

      return { ...state, isloading: false, gift: newdata };
    }

    case GET_PASSES_FAILURE: {
      return { ...state, isError: true };
    }
    default:
      return state;
  }
};
