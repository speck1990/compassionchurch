import { GET_PAGES, SET_CURRENT, UPDATE_CURRENT, UPDATE_PAGE, CLEAR_CURRENT, PAGE_ERROR, ADD_PAGE, SET_HOME, SET_LOADING, DELETE_PAGE, CLEAR_ERRORS } from "../types";

const pageReducer = (state, action) => {
	switch (action.type) {
		case GET_PAGES:
			return {
				...state,
				pages: action.payload,
				loading: false
			};

		case ADD_PAGE:
			return {
				...state,
				pages: [action.payload, ...state.pages],
				isSaved: true,
				loading: false
			};

		case UPDATE_PAGE:
			return {
				...state,
				pages: state.pages.map(page => (page._id === action.payload._id ? action.payload : page)),
				isSaved: true,
				loading: false
			};

		case DELETE_PAGE:
			return {
				...state,
				pages: state.pages.filter(page => page._id !== action.payload),
				loading: false
			};

		case SET_CURRENT:
			return {
				...state,
				current: action.payload,
				isSaved: false,
				loading: false
			};

		case SET_HOME:
			return {
				...state,
				pages: state.pages.map(page => (page._id === action.payload._id ? action.payload : page)),
				current: action.payload,
				loading: false
			};

		case CLEAR_CURRENT:
			return {
				...state,
				current: null,
				isSaved: false,
				loading: false
			};

		case UPDATE_CURRENT:
			return {
				...state,
				current: action.payload,
				isSaved: false,
				loading: false
			};

		case PAGE_ERROR:
			return {
				...state,
				error: action.payload,
				loading: false
			};

		case CLEAR_ERRORS:
			return {
				...state,
				error: ""
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

export default pageReducer;
