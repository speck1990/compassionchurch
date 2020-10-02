import React, { useReducer } from "react";
import PageContext from "./pageContext";
import pageReducer from "./pageReducer";
import {} from "../types";

const PageState = props => {
	const pages = [
		{
			title: "About Us",
			subtitle: "Get to know us",
			content: [
				{ type: "heading", text: "About Us" },
				{ type: "paragraph", text: "Irure proident aliqua amet voluptate non non pariatur. Non nisi eu nulla consequat. Enim fugiat dolore quis dolor culpa. Ullamco reprehenderit proident nostrud voluptate deserunt ea elit qui reprehenderit enim duis deserunt adipisicing dolor." },
				{ type: "button", text: "Click me", url: "http://www.google.com" }
			]
		},
		{
			title: "Contact Us",
			subtitle: "Say hi to us",
			content: [
				{ type: "heading", text: "Cotact Us" },
				{ type: "paragraph", text: "Irure proident aliqua amet voluptate non non pariatur. Non nisi eu nulla consequat. Enim fugiat dolore quis dolor culpa. Ullamco reprehenderit proident nostrud voluptate deserunt ea elit qui reprehenderit enim duis deserunt adipisicing dolor." },
				{ type: "button", text: "Click me", url: "http://www.google.com" }
			]
		}
	];

	const initalState = {};

	const [state, dispatch] = useReducer(pageReducer, initalState);

	return <PageContext.Provider value={{}}>{props.children}</PageContext.Provider>;
};

export default PageState;
