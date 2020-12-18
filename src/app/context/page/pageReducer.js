import { GET_PAGES, SET_CURRENT, UPDATE_CURRENT, UPDATE_PAGE, CLEAR_CURRENT, PAGE_ERROR, ADD_PAGE, SET_LOADING, DELETE_PAGE } from "../types";

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
				loading: false
			};

		case UPDATE_PAGE:
			return {
				...state,
				pages: state.pages.map(page => (page._id === action.payload.id ? action.payload : page)),
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

		case PAGE_ERROR:
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

export default pageReducer;
