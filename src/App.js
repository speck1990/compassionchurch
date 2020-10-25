import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import PrivateRoute from "./routing/PrivateRoute";

import Dashboard from "./dashboard/Dashboard";
import Pages from "./pages/Pages";
import PageForm from "./pages/PageForm";
import LinkForm from "./navigation/LinkForm";
import Navigation from "./navigation/Navigation";
import Login from "./auth/Login";

import AuthState from "./context/auth/AuthState";
import PageState from "./context/page/PageState";
import LinkState from "./context/link/LinkState";

const App = () => {
	return (
		<AuthState>
			<PageState>
				<LinkState>
					<Router>
						<div>
							<h1>Compassion Network</h1>
							<Link to="/">Home</Link> | <Link to="/pages">Pages</Link> | <Link to="/links">Links</Link>
							<Switch>
								<PrivateRoute exact path="/" component={Dashboard} />
								<Route exact path="/pages" component={Pages} />
								<Route exact path="/addpage" component={PageForm} />
								<Route exact path="/pages/create" component={PageForm} />
								<Route exact path="/pages/:id" component={PageForm} />
								<Route exact path="/links" component={Navigation} />
								<Route exact path="/links/create" component={LinkForm} />
								<Route exact path="/links/:id" component={LinkForm} />
								<Route exact path="/login" component={Login} />
							</Switch>
						</div>
					</Router>
				</LinkState>
			</PageState>
		</AuthState>
	);
};

export default App;
