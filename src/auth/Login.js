import React from "react";

const Login = () => {
	return (
		<div>
			<form>
				<input type="email" name="email" placeholder="Email" />
				<br />
				<input type="password" name="password" placeholder="Password" />
				<br />
				<button>Login</button>
			</form>
		</div>
	);
};

export default Login;
