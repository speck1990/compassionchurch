import { USER_LOADED, LOGIN_SUCCESS } from "../types";

const authReducer = (state, action) => {
	switch (action.type) {
		case USER_LOADED:
			return {
				...state,
				isAuthenticated: true,
				loading: false,
				user: action.payload
			};

		case LOGIN_SUCCESS:
		default:
			return state;
	}
};

export default authReducer;
