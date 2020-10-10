import { GET_PAGES, SET_CURRENT, UPDATE_CURRENT } from "../types";

const pageReducer = (state, action) => {
	switch (action.type) {
		case GET_PAGES:
			return {
				...state,
				pages: action.payload
			};

		case SET_CURRENT:
			return {
				...state,
				current: action.payload
			};

		case UPDATE_CURRENT:
			return {
				...state,
				current: action.payload
			};

		default:
			return state;
	}
};

export default pageReducer;
