import { GET_PRODUCT_LOADING, GET_PRODUCT_SUCCESS, GET_PRODUCT_ERROR, GET_MEAL_ERROR, GET_MEAL_LOADING, GET_MEAL_SUCCESS, GET_PILOT_ERROR, GET_PILOT_LOADING, GET_PILOT_SUCCESS, GET_PRODUCT_ASC, GET_PRODUCT_DEC, GET_PRODUCT_SEARCH } from "./work.types";


const init = {
    loading: false,
    error: false,
    product: [],
    searchResults: [],
	page: 1,
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

export const productReducer = (state = init, {type, payload}) => {
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
            loading:true,
            error: false,
        }
    }
 
    case GET_PRODUCT_SUCCESS: {
        const newdata=[...state.product, payload]
        return {
            ...state,
            loading:false,
            product: newdata,
        }
    }
    case GET_PRODUCT_ASC:{
        const sortAsc = payload.sort((a, b) => (a.time < b.time ? 1 : a.time > b.time ? -1 : 0));
        return {
            ...state,
            product: sortAsc,
        }
    }
    case GET_PRODUCT_DEC:{
        const sortDec = payload.sort((a, b) => (a.time < b.time ? -1 : a.time > b.time ? 1 : 0));
        return {
            ...state,
            product: sortDec,
        }
    }
    case GET_PRODUCT_SEARCH: {
        return {
            ...state,
            product: type.payload,
            page: 1
        }
    }
 
    default: {
        return state;
    }
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