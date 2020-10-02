import {} from "../types";

const pageReducer = (state, action) => {
	switch (action.type) {
		case true:
			return {
				...state
			};

		default:
			return state;
	}
};

export default pageReducer;
