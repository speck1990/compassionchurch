import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import PageContext from "./pageContext";
import pageReducer from "./pageReducer";
import { GET_PAGES, SET_CURRENT, UPDATE_CURRENT, UPDATE_PAGE, CLEAR_CURRENT, PAGE_ERROR, ADD_PAGE } from "../types";

const PageState = props => {
	const initalState = {
		pages: null,
		current: null,
		error: null
	};

	const [state, dispatch] = useReducer(pageReducer, initalState);

	const getPages = async () => {
		try {
			const res = await axios.get("/pages");
			dispatch({ type: GET_PAGES, payload: res.data });
		} catch (err) {
			dispatch({
				type: PAGE_ERROR,
				payload: err.response.msg
			});
		}
	};

	const addPage = async page => {
		const config = {
			headers: {
				"Content-Type": "application/json"
			}
		};

		try {
			const res = await axios.post(`/pages`, { id: uuidv4(), ...page }, config);
			dispatch({ type: ADD_PAGE, payload: res.data });
		} catch (err) {
			dispatch({
				type: PAGE_ERROR,
				payload: err.response.msg
			});
		}

		clearCurrent();
	};

	const updatePage = async page => {
		const config = {
			headers: {
				"Content-Type": "application/json"
			}
		};

		try {
			const res = await axios.put(`/pages/${page.id}`, page, config);
			dispatch({ type: UPDATE_PAGE, payload: res.data });
		} catch (err) {
			dispatch({
				type: PAGE_ERROR,
				payload: err.response.msg
			});
		}

		clearCurrent();
	};

	const setCurrent = async id => {
		if (id) {
			try {
				const res = await axios.get(`/pages/${id}`);
				dispatch({ type: SET_CURRENT, payload: res.data });
			} catch (err) {
				dispatch({
					type: PAGE_ERROR,
					payload: err.response.msg
				});
			}
		} else {
			dispatch({ type: SET_CURRENT, payload: { title: "", subtitle: "", content: "" } });
		}
	};

	const clearCurrent = () => {
		dispatch({ type: CLEAR_CURRENT });
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

	const deleteBlock = id => {
		const updatedContent = state.current.content.filter(block => block.id !== id);
		const updatedCurrent = { ...state.current, content: updatedContent };
		dispatch({ type: UPDATE_CURRENT, payload: updatedCurrent });
	};

	return (
		<PageContext.Provider
			value={{
				pages: state.pages,
				current: state.current,
				getPages,
				addPage,
				setCurrent,
				updateCurrent,
				clearCurrent,
				addBlock,
				deleteBlock,
				updatePage
			}}
		>
			{props.children}
		</PageContext.Provider>
	);
};

export default PageState;
