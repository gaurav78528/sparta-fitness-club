
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


export const searchPosts = (query) => (dispatch, getState) => {
	console.log(query);
	const { workout } = getState();
	const searchResults =  workout.searchResults.filter((post) => 
		post.name.toLowerCase().includes(query.toLowerCase())
	);
	dispatch({ type: actions.SEARCH_POSTS, payload: searchResults });
};
