import React, { useContext } from "react";
import AuthContext from "../context/auth/authContext";

const Dashboard = () => {
	const authContext = useContext(AuthContext);

	const { logoutUser } = authContext;

	return (
		<div>
			<h1>Dashboard</h1>
			<p>
				<button onClick={logoutUser}>Logout</button>
			</p>
		</div>
	);
};

export default Dashboard;
