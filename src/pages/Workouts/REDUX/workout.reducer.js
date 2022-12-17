// import {GET_POST_ERROR,GET_POST_LOADING,GET_POST_SUCCESS} from "./workout.types";
// const initialState={
//     workout:[],
//     loading:false,
//     error:false
// }
// export const workoutReducer= (state=initialState,{type,payload}) =>
// {
//     switch(type)
//     {
//       case GET_POST_LOADING :{
//         return{
//             ...state,
//             loading:true,
//             error:false
//         }
//       }
//       case GET_POST_SUCCESS :{
//         return{
//             ...state,
//             loading:false,
//             workout:payload
//         }
//       }
//       case GET_POST_ERROR : {
//         return{
//             ...state,
//             loading:false,
//             error:payload
//         }
//       }
//       default :{
//         return state;
        
//       }
//     }
// }

import * as actions from './workout.types'

const initialState = {
	posts: [],
	searchResults: [],
	page: 1,
};

export const workoutReducer = (state = initialState, action) => {
	switch (action.type) {
		case actions.FETCH_POST_REQUEST:
			return {
				...state,
				loading: true,
			};
		case actions.FETCH_POST_SUCCESS:
			return {
				...state,
				loading: false,
				posts: action.payload.data,
				searchResults: action.payload.data,
			};
		case actions.FETCH_POST_FAILED:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		
		
		case actions.SEARCH_POSTS:
			return {
				...state,
				posts: action.payload,
				page: 1
			};
		default:
			return state;
	}
};
