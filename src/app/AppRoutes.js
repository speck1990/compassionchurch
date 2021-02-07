import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./routing/PrivateRoute";

const Dashboard = lazy(() => import("./dashboard/Dashboard"));
const Pages = lazy(() => import("./pageCreator/Pages"));
const PageForm = lazy(() => import("./pageCreator/PageForm"));
const LinkForm = lazy(() => import("./navigation/LinkForm"));
const Navigation = lazy(() => import("./navigation/Navigation"));
const Login = lazy(() => import("./generalPages/Login"));
const Settings = lazy(() => import("./generalPages/Settings"));

const AppRoutes = () => {
	return (
		<Suspense fallback="">
			<Switch>
				<PrivateRoute exact path="/" component={Dashboard} />
				<PrivateRoute exact path="/pages" component={Pages} />
				<PrivateRoute exact path="/pages/create" component={PageForm} />
				<PrivateRoute exact path="/pages/:id" component={PageForm} />
				<PrivateRoute exact path="/links" component={Navigation} />
				<PrivateRoute exact path="/links/create" component={LinkForm} />
				<PrivateRoute exact path="/links/:id" component={LinkForm} />
				<Route exact path="/login" component={Login} />
				<PrivateRoute exact path="/settings" component={Settings} />
			</Switch>
		</Suspense>
	);
};

export default AppRoutes;
