import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Dashboard from "./pages/Dashboard";

import AuthState from "./context/auth/AuthState";

const App = () => {
	return (
		<AuthState>
			<Router>
				<div>
					<h1>Compassion Network</h1>
					<Link to="/">Home</Link>
					<Switch>
						<Route exact path="/" component={Dashboard} />
					</Switch>
				</div>
			</Router>
		</AuthState>
	);
};

export default App;
