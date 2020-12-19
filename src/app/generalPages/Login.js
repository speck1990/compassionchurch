import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../context/auth/authContext";
import { Alert } from "react-bootstrap";

const Login = props => {
	const authContext = useContext(AuthContext);

	const { loginUser, isAuthenticated, error } = authContext;

	useEffect(() => {
		// TODO: MAKE LOGIN FORM NOT APPEAR IF ALREADY LOGGED IN
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
		loginUser({ email, password });
	};

	return (
		<div>
			<div className="az-signin-wrapper">
				<div className="az-card-signin">
					<h1 className="az-logo">
						az<span>i</span>a
					</h1>
					<div className="az-signin-header">
						<h2>Welcome back!</h2>
						<h4>Please log in to continue</h4>

						<form onSubmit={onSubmit}>
							<div className="form-group">
								<label>Email</label>
								<input type="text" name="email" className="form-control" onChange={onChange} placeholder="Enter your email" defaultValue={email} />
							</div>
							{/* form-group */}
							<div className="form-group">
								<label>Password</label>
								<input type="password" name="password" className="form-control" onChange={onChange} placeholder="Enter your password" defaultValue={password} />
							</div>
							{error && <Alert variant="danger">{error}</Alert>}
							{/* form-group */}
							<button type="submit" className="btn btn-az-primary btn-block">
								Login
							</button>
						</form>
					</div>
					{/* az-signin-header */}
					<div className="az-signin-footer">
						<p>
							<a href="#/">Forgot password?</a>
						</p>
					</div>
					{/* az-signin-footer */}
				</div>
				{/* az-card-signin */}
			</div>
			{/* az-signin-wrapper */}
		</div>
	);
};

export default Login;
