import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import PageContext from "./pageContext";
import pageReducer from "./pageReducer";
import { GET_PAGES, SET_CURRENT, UPDATE_CURRENT, UPDATE_PAGE, CLEAR_CURRENT, PAGE_ERROR, ADD_PAGE, SET_LOADING } from "../types";

const PageState = props => {
	const initalState = {
		pages: null,
		current: null,
		error: null,
		loading: false
	};

	const [state, dispatch] = useReducer(pageReducer, initalState);

	const getPages = async () => {
		setLoading();

		try {
			const res = await axios.get("/pages");
			dispatch({ type: GET_PAGES, payload: res.data });
		} catch (err) {
			dispatch({
				type: PAGE_ERROR,
				payload: err
			});
		}
	};

	const addPage = async page => {
		setLoading();

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
				payload: err
			});
		}

		clearCurrent();
	};

	const updatePage = async page => {
		setLoading();

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
				payload: err
			});
		}

		clearCurrent();
	};

	const setCurrent = async id => {
		setLoading();

		if (id) {
			try {
				const res = await axios.get(`/pages/${id}`);
				dispatch({ type: SET_CURRENT, payload: res.data });
			} catch (err) {
				dispatch({
					type: PAGE_ERROR,
					payload: err
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

	const addBlock = (block, position) => {
		block.id = block.id || uuidv4();

		const updatedContent = [...state.current.content];
		updatedContent.splice(position, 0, block);
		const updatedCurrent = { ...state.current, content: updatedContent };

		dispatch({ type: UPDATE_CURRENT, payload: updatedCurrent });
	};

	const deleteBlock = id => {
		const updatedContent = state.current.content.filter(block => block.id !== id);
		const updatedCurrent = { ...state.current, content: updatedContent };
		dispatch({ type: UPDATE_CURRENT, payload: updatedCurrent });
	};

	const setLoading = () => dispatch({ type: SET_LOADING });

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
				updatePage,
				loading: state.loading
			}}
		>
			{props.children}
		</PageContext.Provider>
	);
};

export default PageState;
