import {
  GET_PRODUCT_LOADING,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_ERROR,
} from "./work.types";

const init = {
  loading: false,
  error: false,
  product: [],
};

export const productReducer = (state = init, { type, payload }) => {
  switch (type) {
    case GET_PRODUCT_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case GET_PRODUCT_SUCCESS: {
      const newdata = [...state.product, payload];
      return {
        ...state,
        loading: false,
        product: newdata,
      };
    }
    case GET_PRODUCT_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    default: {
      return state;
    }
  }
};
