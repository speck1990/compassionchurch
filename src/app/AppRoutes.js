import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./routing/PrivateRoute";

const Dashboard = lazy(() => import("./dashboard/Dashboard"));
const Pages = lazy(() => import("./pageCreator/Pages"));
const PageForm = lazy(() => import("./pageCreator/PageForm"));
const LinkForm = lazy(() => import("./navigation/LinkForm"));
const Navigation = lazy(() => import("./navigation/Navigation"));
const Login = lazy(() => import("./generalPages/Login"));

const AppRoutes = () => {
	return (
		<Suspense fallback="">
			<Switch>
				<PrivateRoute exact path="/" component={Dashboard} />
				<Route exact path="/pages" component={Pages} />
				<Route exact path="/pages/create" component={PageForm} />
				<Route exact path="/pages/:id" component={PageForm} />
				<Route exact path="/links" component={Navigation} />
				<Route exact path="/links/create" component={LinkForm} />
				<Route exact path="/links/:id" component={LinkForm} />
				<Route exact path="/login" component={Login} />
			</Switch>
		</Suspense>
	);
};

export default AppRoutes;
