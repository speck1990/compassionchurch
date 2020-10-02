import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../context/auth/authContext";

const Login = props => {
	const authContext = useContext(AuthContext);

	const { loginUser, isAuthenticated } = authContext;

	useEffect(() => {
		if (isAuthenticated) {
			props.history.push("/");
		}
		//eslint-disable-next-line
	}, [isAuthenticated, props.history]);

	const [user, setUser] = useState({
		email: "",
		password: ""
	});

	const { email, password } = user;

	const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

	const onSubmit = e => {
		e.preventDefault();
		if (email === "" || password === "") {
			console.log("Please complete the form.");
		} else {
			loginUser();
		}
	};

	return (
		<div>
			<form onSubmit={onSubmit}>
				<input type="email" name="email" value={email} placeholder="Email" onChange={onChange} />
				<br />
				<input type="password" name="password" value={password} placeholder="Password" onChange={onChange} />
				<br />
				<button type="submit">Login</button>
			</form>
		</div>
	);
};

export default Login;
