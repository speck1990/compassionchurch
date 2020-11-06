import React from "react";
import AuthState from "./context/auth/AuthState";
import PageState from "./context/page/PageState";
import LinkState from "./context/link/LinkState";

const AppContexts = props => {
	return (
		<AuthState>
			<PageState>
				<LinkState>{props.children}</LinkState>
			</PageState>
		</AuthState>
	);
};

export default AppContexts;
