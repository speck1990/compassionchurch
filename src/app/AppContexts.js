import React from "react";
import AuthState from "./context/auth/AuthState";
import PageState from "./context/page/PageState";
import LinkState from "./context/link/LinkState";
import SettingState from "./context/setting/SettingState";

const AppContexts = props => {
	return (
		<AuthState>
			<SettingState>
				<PageState>
					<LinkState>{props.children}</LinkState>
				</PageState>
			</SettingState>
		</AuthState>
	);
};

export default AppContexts;
