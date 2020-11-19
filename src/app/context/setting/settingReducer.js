import { GET_SETTINGS, SET_CURRENT, UPDATE_CURRENT, UPDATE_SETTINGS, CLEAR_CURRENT, SETTING_ERROR, SET_LOADING } from "../types";

const linkReducer = (state, action) => {
	switch (action.type) {
		case GET_SETTINGS:
			return {
				...state,
				settings: action.payload,
				loading: false
			};

		case UPDATE_SETTINGS:
			return {
				...state,
				settings: action.payload,
				loading: false
			};

		case SET_CURRENT:
			return {
				...state,
				current: action.payload,
				loading: false
			};

		case CLEAR_CURRENT:
			return {
				...state,
				current: null,
				loading: false
			};

		case UPDATE_CURRENT:
			return {
				...state,
				current: action.payload,
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
