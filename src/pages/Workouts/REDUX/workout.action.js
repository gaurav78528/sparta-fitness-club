// import {GET_POST_ERROR,GET_POST_LOADING,GET_POST_SUCCESS} from "./workout.types"
// import axios from "axios";
// export const getWorkoutData =  async (dispatch,start) => {
//     dispatch({type:GET_POST_LOADING})
//     try{
//         let response = await axios.get(`https://sparta-fitness-database.vercel.app/workoutVideos?_page=${start}&_limit=28`);
//         dispatch({type:GET_POST_SUCCESS,payload:response.data})
//     }
//     catch(e)
//     {
//         dispatch({type:GET_POST_ERROR,payload:e.message})

//     }
// }
import * as actions from "./workout.types";
import axios from 'axios';

export const fetchPosts = () => async (dispatch) => {
	dispatch({ type: actions.FETCH_POST_REQUEST });

	try {
		let response = await axios.get(`https://sparta-fitness-database.vercel.app/workoutVideos`);
      dispatch({type: actions.FETCH_POST_SUCCESS,payload:response})
	} catch (error) {
		dispatch({ type: actions.FETCH_POST_FAILED, payload: error.message });
		console.log(error.message);
	}
};