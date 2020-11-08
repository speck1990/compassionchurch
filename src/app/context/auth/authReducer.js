import { USER_LOADED, LOGIN_SUCCESS, LOGOUT_USER } from "../types";

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
			localStorage.setItem("token", action.payload.token);
			return {
				...state,
				...action.payload,
				isAuthenticated: true,
				loading: false
			};

		case LOGOUT_USER:
			localStorage.removeItem("token");
			return {
				...state,
				isAuthenticated: false,
				loading: false
			};

		default:
			return state;
	}
};

export default authReducer;