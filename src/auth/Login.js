import React, { useState, useContext } from "react";
import AuthContext from "../context/auth/authContext";

const Login = props => {
	const authContext = useContext(AuthContext);

	const { loginUser, isAuthenticated } = authContext;

	const [user, setUser] = useState({
		email: "",
		password: ""
	});

	const { email, password } = user;

	const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

	return (
		<div>
			<form>
				<input type="email" name="email" value={email} placeholder="Email" onChange={onChange} />
				<br />
				<input type="password" name="password" value={password} placeholder="Password" onChange={onChange} />
				<br />
				<button>Login</button>
			</form>
		</div>
	);
};

export default Login;
