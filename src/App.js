import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Dashboard from "./pages/Dashboard";

const App = () => {
	return (
		<Router>
			<div>
				<h1>Compassion Network</h1>
				<Link to="/">Home</Link>
				<Switch>
					<Route exact path="/" component={Dashboard} />
				</Switch>
			</div>
		</Router>
	);
};

export default App;
