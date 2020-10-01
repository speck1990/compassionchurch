import React, { useReducer } from "react";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import { USER_LOADED, LOGIN_SUCCESS } from "../types";

const AuthState = props => {
	const users = [
		{
			id: "1",
			firstName: "Stephen",
			lastName: "Peck",
			email: "speck1990@gmail.com",
			password: "password123"
		}
	];

	const initalState = {
		isAuthenticated: null,
		user: null
	};

	const [state, dispatch] = useReducer(authReducer, initalState);

	// Load User
	const loadUser = async () => {
		dispatch({
			type: USER_LOADED,
			payload: users[1]
		});
	};

	return (
		<AuthContext.Provider
			value={{
				isAuthenticated: state.isAuthenticated,
				user: state.user,
				loadUser
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthState;
