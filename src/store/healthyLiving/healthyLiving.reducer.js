import {
  GET_DATA_LOADING,
  GET_DATA_SUCCESS,
  GET_DATA_ERROR,
} from "./healthyLiving.types";

const initalState = {
  loading: false,
  error: null,
  data: [],
};

export const healthLivingReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case GET_DATA_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_DATA_ERROR: {
      return {
        ...state,
        loading: false,
        error: payload,
      };
    }

    case GET_DATA_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: null,
        data: payload,
      };
    }
    default: {
      return state;
    }
  }
};
