import { GET_LINKS, SET_CURRENT, UPDATE_CURRENT, UPDATE_LINK, CLEAR_CURRENT, LINK_ERROR, ADD_LINK, SET_LOADING, DELETE_LINK, CLEAR_ERRORS } from "../types";

const linkReducer = (state, action) => {
	switch (action.type) {
		case GET_LINKS:
			return {
				...state,
				links: action.payload,
				loading: false
			};

		case ADD_LINK:
			return {
				...state,
				links: [action.payload, ...state.links],
				isSaved: true,
				loading: false
			};

		case UPDATE_LINK:
			return {
				...state,
				links: state.links.map(link => (link._id === action.payload._id ? action.payload : link)),
				isSaved: true,
				loading: false
			};

		case DELETE_LINK:
			return {
				...state,
				links: state.links.filter(link => link._id !== action.payload),
				loading: false
			};

		case SET_CURRENT:
			return {
				...state,
				current: action.payload,
				isSaved: false,
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
				isSaved: false,
				loading: false
			};

		case LINK_ERROR:
			return {
				...state,
				error: action.payload,
				loading: false
			};

		case CLEAR_ERRORS:
			return {
				...state,
				error: []]
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
