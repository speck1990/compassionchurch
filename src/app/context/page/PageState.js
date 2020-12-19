import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import PageContext from "./pageContext";
import pageReducer from "./pageReducer";
import { GET_PAGES, SET_CURRENT, UPDATE_CURRENT, UPDATE_PAGE, CLEAR_CURRENT, PAGE_ERROR, ADD_PAGE, SET_LOADING, DELETE_PAGE } from "../types";

const pageSchema = { title: "", subtitle: "", description: "", publish: "", unpublish: "", content: "" };

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
			const res = await axios.get("/api/pages");
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
			const res = await axios.post(`/api/pages`, page, config);
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
			const res = await axios.put(`/api/pages/${page.id}`, page, config);
			console.log(res.data);
			dispatch({ type: UPDATE_PAGE, payload: res.data });
		} catch (err) {
			dispatch({
				type: PAGE_ERROR,
				payload: err
			});
		}

		clearCurrent();
	};

	const deletePage = async id => {
		setLoading();

		try {
			await axios.delete(`/api/pages/${id}`);
		} catch (err) {
			dispatch({
				type: PAGE_ERROR,
				payload: err
			});
		}

		dispatch({ type: DELETE_PAGE, payload: id });
	};

	const setCurrent = async id => {
		setLoading();

		if (id) {
			try {
				const res = await axios.get(`/api/pages/${id}`);
				dispatch({ type: SET_CURRENT, payload: res.data });
			} catch (err) {
				dispatch({
					type: PAGE_ERROR,
					payload: err
				});
			}
		} else {
			dispatch({ type: SET_CURRENT, payload: pageSchema });
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
		const updatedContent = state.current.content.filter(block => block._id !== id);
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
				deletePage,
				loading: state.loading
			}}
		>
			{props.children}
		</PageContext.Provider>
	);
};

export default PageState;
