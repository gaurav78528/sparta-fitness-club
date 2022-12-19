
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
import { GET_PRODUCT_LOADING, GET_PRODUCT_SUCCESS, GET_PRODUCT_ERROR, GET_MEAL_ERROR, GET_MEAL_LOADING, GET_MEAL_SUCCESS, GET_PILOT_ERROR, GET_PILOT_LOADING, GET_PILOT_SUCCESS } from "./work.types";


const init = {
    loading: false,
    error: false,
    product: [],
 
}

const initial = {
    loading: false,
    error: false,
    
    meal:[],
}

const initialpilot = {
    loading: false,
    error: false,
    
    pilot:[],
}

export const productReducer = (state = init, { type, payload }) => {
  switch (type) {
    case GET_PRODUCT_ERROR: {
        return {
            ...state,
            loading:false,
            error: true,
        }
    }
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
  }  
}


export const mealReducer = (state = initial, {type, payload}) => {
    switch (type) {
     
      case GET_MEAL_ERROR: {
          return {
              ...state,
              loading:false,
              error: true,
          }
      }
     
      case GET_MEAL_LOADING: {
          return {
              ...state,
              loading:true,
              error: false,
          }
      }
    
      case GET_MEAL_SUCCESS: {
          const newdata=[...state.meal, payload]
          return {
              ...state,
              loading:false,
              meal: newdata,
          }
      }
      default: {
          return state;
      }
    }  
  }

  export const pilotReducer = (state = initialpilot, {type, payload}) => {
    switch (type) {
     
      case GET_PILOT_ERROR: {
          return {
              ...state,
              loading:false,
              error: true,
          }
      }
     
      case GET_PILOT_LOADING: {
          return {
              ...state,
              loading:true,
              error: false,
          }
      }
    
      case GET_PILOT_SUCCESS: {
          const newdata=[...state.pilot, payload]
          return {
              ...state,
              loading:false,
              pilot: newdata,
          }
      }
      default: {
          return state;
      }
    }  
  }
