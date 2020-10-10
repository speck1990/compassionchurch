import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import PageContext from "./pageContext";
import pageReducer from "./pageReducer";
import { GET_PAGES, SET_CURRENT, UPDATE_CURRENT } from "../types";

const PageState = props => {
	const pages = [
		{
			id: 1,
			title: "About Us",
			subtitle: "Get to know us",
			content: [
				{ id: 1, type: "heading", text: "<h1>About Us</h1>" },
				{
					id: 2,
					type: "paragraph",
					text: "<p>Irure proident aliqua amet voluptate non non pariatur. Non nisi eu nulla consequat. Enim fugiat dolore quis dolor culpa. Ullamco reprehenderit proident nostrud voluptate deserunt ea elit qui reprehenderit enim duis deserunt adipisicing dolor.</p>"
				},
				{ id: 3, type: "image" }
			]
		},
		{
			id: 2,
			title: "Locations and Services",
			subtitle: "Get to know us",
			content: [
				{ id: 1, type: "heading", text: "<h1>About Us</h1>" },
				{
					id: 2,
					type: "paragraph",
					text: "<p>Irure proident aliqua amet voluptate non non pariatur. Non nisi eu nulla consequat. Enim fugiat dolore quis dolor culpa. Ullamco reprehenderit proident nostrud voluptate deserunt ea elit qui reprehenderit enim duis deserunt adipisicing dolor.</p>"
				},
				{ id: 3, type: "image" }
			]
		}
	];

	const initalState = {
		pages: null,
		current: null,
		error: null
	};

	const [state, dispatch] = useReducer(pageReducer, initalState);

	const getPages = () => {
		// const pages = [pages from api]
		dispatch({ type: GET_PAGES, payload: pages });
	};

	const setCurrent = page => {
		dispatch({ type: SET_CURRENT, payload: page });
	};

	const updateCurrent = current => {
		dispatch({ type: UPDATE_CURRENT, payload: current });
	};

	const addBlock = (type, position) => {
		const updatedContent = [...state.current.content];
		const newKey = position + 1;
		updatedContent.splice(newKey, 0, { id: uuidv4(), type, text: "" });
		const updatedCurrent = { ...state.current, content: updatedContent };

		dispatch({ type: UPDATE_CURRENT, payload: updatedCurrent });
	};

	return (
		<PageContext.Provider
			value={{
				pages: state.pages,
				current: state.current,
				getPages,
				setCurrent,
				updateCurrent,
				addBlock
			}}
		>
			{props.children}
		</PageContext.Provider>
	);
};

export default PageState;
