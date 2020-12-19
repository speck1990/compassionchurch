import React, { useContext, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import AuthContext from "../context/auth/authContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
	const authContext = useContext(AuthContext);

	const { loadUser, isAuthenticated, loading } = authContext;

	useEffect(() => {
		loadUser();
		//eslint-disable-next-line
	}, []);

	// TODO: MAKE SURE PRIVATE PAGE DOES NOT SHOW BEFORE LOGIN
	return <Route {...rest} render={props => (!isAuthenticated && !loading ? <Redirect to="/login" /> : <Component {...props} />)} />;
};

export default PrivateRoute;
