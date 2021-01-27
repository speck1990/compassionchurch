import { GET_SETTINGS, UPDATE_CURRENT, UPDATE_SETTINGS, SETTING_ERROR, SET_LOADING } from "../types";

const linkReducer = (state, action) => {
	switch (action.type) {
		case GET_SETTINGS:
			return {
				...state,
				settings: action.payload,
				isSaved: false,
				loading: false
			};

		case UPDATE_SETTINGS:
			return {
				...state,
				settings: action.payload,
				isSaved: true,
				loading: false
			};

		case UPDATE_CURRENT:
			return {
				...state,
				settings: action.payload,
				isSaved: false,
				loading: false
			};

		case SETTING_ERROR:
			return {
				...state,
				error: action.payload,
				loading: false
			};

		case SET_LOADING:
			return {
				...state,
				loading: true
			};

		default:
			return state;
	}
};

export default linkReducer;
