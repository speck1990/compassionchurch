import React, { useReducer } from "react";
import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import { USER_LOADED, LOGIN_SUCCESS, LOGOUT_USER, AUTH_ERROR, LOGIN_FAIL, CLEAR_ERRORS } from "../types";

const AuthState = props => {
	const initalState = {
		token: localStorage.getItem("token"),
		isAuthenticated: null,
		loading: true,
		user: null,
		error: null
	};

	const [state, dispatch] = useReducer(authReducer, initalState);

	// Load User
	const loadUser = async () => {
		if (localStorage.token) {
			setAuthToken(localStorage.token);
		}

		try {
			const res = await axios.get("http://localhost:5000/api/users");

			dispatch({
				type: USER_LOADED,
				payload: res.data
			});
		} catch (error) {
			dispatch({
				type: AUTH_ERROR
			});
		}
	};

	// Login User
	const loginUser = async formData => {
		const config = {
			headers: {
				"Content-Type": "application/json"
			}
		};

		try {
			const res = await axios.post("http://localhost:5000/api/users/login", formData, config);

			dispatch({
				type: LOGIN_SUCCESS,
				payload: res.data
			});

			loadUser();
		} catch (error) {
			dispatch({
				type: LOGIN_FAIL,
				payload: error.response.data.msg
			});
		}
	};

	// Logout User
	const logoutUser = () => {
		dispatch({
			type: LOGOUT_USER
		});
	};

	// Clear errors
	const clearErrors = async () => dispatch({ type: CLEAR_ERRORS });

	return (
		<AuthContext.Provider
			value={{
				isAuthenticated: state.isAuthenticated,
				user: state.user,
				error: state.error,
				loading: state.loading,
				loadUser,
				loginUser,
				logoutUser,
				clearErrors
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthState;
