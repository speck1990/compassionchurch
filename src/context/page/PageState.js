import React, { useReducer } from "react";
import PageContext from "./pageContext";
import pageReducer from "./pageReducer";
import { ADD_ELEMENT } from "../types";

const PageState = props => {
	const pages = [
		{
			title: "About Us",
			subtitle: "Get to know us",
			content: [
				{ key: 0, type: "heading", text: "About Us" },
				{ key: 1, type: "paragraph", text: "Irure proident aliqua amet voluptate non non pariatur. Non nisi eu nulla consequat. Enim fugiat dolore quis dolor culpa. Ullamco reprehenderit proident nostrud voluptate deserunt ea elit qui reprehenderit enim duis deserunt adipisicing dolor." },
				{ key: 2, type: "button", text: "Click me", url: "http://www.google.com" }
			]
		}
	];

	const initalState = pages[0];

	const [state, dispatch] = useReducer(pageReducer, initalState);

	const addElement = (type, key) => {
		const content = [...state.content];
		const newKey = key + 1;
		content.splice(newKey, 0, { newKey, type });

		console.log({ content });
		dispatch({
			type: ADD_ELEMENT,
			payload: { content }
		});
	};

	return <PageContext.Provider value={{ title: state.title, subtitle: state.subtitle, content: state.content, addElement }}>{props.children}</PageContext.Provider>;
};

export default PageState;
