import React, { useReducer } from "react";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import { LOGIN_SUCCESS } from "../types";

const AuthState = props => {
	const initalState = {};

	const [state, dispatch] = useReducer(authReducer, initalState);

	return <AuthContext.Provider value={{}}>{props.children}</AuthContext.Provider>;
};

export default AuthState;
