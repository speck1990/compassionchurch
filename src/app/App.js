import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import "./App.scss";
import AppContexts from "./AppContexts";
import AppRoutes from "./AppRoutes";
import Header from "./shared/Header";
import Footer from "./shared/Footer";

const App = props => {
	const [isFullPageLayout, setIsFullPageLayout] = useState(true);

	useEffect(() => {
		onRouteChanged();
	});

	const onRouteChanged = () => {
		console.log("ROUTE CHANGED");
		window.scrollTo(0, 0);
		const fullPageLayoutRoutes = ["/login", "/page-404"];
		for (let i = 0; i < fullPageLayoutRoutes.length; i++) {
			if (props.location.pathname === fullPageLayoutRoutes[i]) {
				setIsFullPageLayout(true);
				document.querySelector(".az-content-wrapper").classList.add("p-0");
				break;
			} else {
				setIsFullPageLayout(false);
				document.querySelector(".az-content-wrapper").classList.remove("p-0");
			}
		}
	};

	const headerComponent = !isFullPageLayout ? <Header /> : "";
	const footerComponent = !isFullPageLayout ? <Footer /> : "";

	return (
		<AppContexts>
			<div>
				{headerComponent}
				<div className="az-content-wrapper">
					<AppRoutes />
				</div>
				{footerComponent}
			</div>
		</AppContexts>
	);
};

export default withRouter(App);
