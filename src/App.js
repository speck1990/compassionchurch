import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import PrivateRoute from "./routing/PrivateRoute";

import Dashboard from "./pages/Dashboard";
import AddPage from "./pages/AddPage";
import Login from "./auth/Login";

import AuthState from "./context/auth/AuthState";
import PageState from "./context/page/PageState";

const App = () => {
	return (
		<AuthState>
			<PageState>
				<Router>
					<div>
						<h1>Compassion Network</h1>
						<Link to="/">Home</Link> | <Link to="/addpage">Add Page</Link>
						<Switch>
							<PrivateRoute exact path="/" component={Dashboard} />
							<PrivateRoute exact path="/addpage" component={AddPage} />
							<Route exact path="/login" component={Login} />
						</Switch>
					</div>
				</Router>
			</PageState>
		</AuthState>
	);
};

export default App;
