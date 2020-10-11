import { GET_PAGES, SET_CURRENT, UPDATE_CURRENT, UPDATE_PAGE, CLEAR_CURRENT, PAGE_ERROR } from "../types";

const pageReducer = (state, action) => {
	switch (action.type) {
		case GET_PAGES:
			return {
				...state,
				pages: action.payload
			};

		case UPDATE_PAGE:
			return {
				...state,
				pages: state.pages.map(page => (page.id === action.payload.id ? action.payload : page))
			};

		case SET_CURRENT:
			return {
				...state,
				current: action.payload
			};

		case CLEAR_CURRENT:
			return {
				...state,
				current: null
			};

		case UPDATE_CURRENT:
			return {
				...state,
				current: action.payload
			};

		case PAGE_ERROR:
			return {
				...state,
				error: action.payload
			};

		default:
			return state;
	}
};

export default pageReducer;
