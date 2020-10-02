import React, { useReducer } from "react";
import PageContext from "./pageContext";
import pageReducer from "./pageReducer";
import {} from "../types";

const PageState = props => {
	const pages = [{}];

	const initalState = {};

	const [state, dispatch] = useReducer(pageReducer, initalState);

	return <PageContext.Provider value={{}}>{props.children}</PageContext.Provider>;
};

export default PageState;
