import { ADD_ELEMENT } from "../types";

const pageReducer = (state, action) => {
	switch (action.type) {
		case ADD_ELEMENT:
			return {
				...state,
				content: action.payload.content
			};

		default:
			return state;
	}
};

export default pageReducer;
