import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import LinkContext from "./linkContext";
import linkReducer from "./linkReducer";
import { GET_LINKS, SET_CURRENT, UPDATE_CURRENT, UPDATE_LINK, CLEAR_CURRENT, LINK_ERROR, ADD_LINK, SET_LOADING, DELETE_LINK, CLEAR_ERRORS } from "../types";

const LinkState = props => {
	const initalState = {
		links: [],
		current: null,
		error: [],
		isSaved: true,
		loading: false
	};

	const [state, dispatch] = useReducer(linkReducer, initalState);

	const getLinks = async () => {
		setLoading();

		try {
			const res = await axios.get("http://localhost:5000/api/links");
			dispatch({ type: GET_LINKS, payload: res.data });
		} catch (err) {
			dispatch({
				type: LINK_ERROR,
				payload: err.response.data.msg
			});
		}
	};

	const addLink = async link => {
		setLoading();

		const config = {
			headers: {
				"Content-Type": "application/json"
			}
		};

		try {
			const res = await axios.post(`http://localhost:5000/api/links`, link, config);
			dispatch({ type: ADD_LINK, payload: res.data });
		} catch (err) {
			dispatch({
				type: LINK_ERROR,
				payload: err.response.data.errors
			});
		}
	};

	const updateLink = async link => {
		setLoading();
		clearErrors();

		const config = {
			headers: {
				"Content-Type": "application/json"
			}
		};

		try {
			const res = await axios.put(`http://localhost:5000/api/links/${link._id}`, link, config);
			dispatch({ type: UPDATE_LINK, payload: res.data });
		} catch (err) {
			dispatch({
				type: LINK_ERROR,
				payload: err.response.data.errors
			});
		}
	};

	const deleteLink = async id => {
		setLoading();

		try {
			await axios.delete(`http://localhost:5000/api/links/${id}`);
		} catch (err) {
			dispatch({
				type: LINK_ERROR,
				payload: err
			});
		}

		dispatch({ type: DELETE_LINK, payload: id });
	};

	const setCurrent = async id => {
		setLoading();
		clearErrors();

		if (id) {
			try {
				const res = await axios.get(`http://localhost:5000/api/links/${id}`);
				dispatch({ type: SET_CURRENT, payload: res.data });
			} catch (err) {
				dispatch({
					type: LINK_ERROR,
					payload: err.response.data
				});
			}
		} else {
			dispatch({ type: SET_CURRENT, payload: { label: "", type: "page", link: "", newTab: false } });
		}
	};

	const clearCurrent = () => {
		dispatch({ type: CLEAR_CURRENT });
	};

	const updateCurrent = current => {
		dispatch({ type: UPDATE_CURRENT, payload: current });
	};

	const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

	const setLoading = () => dispatch({ type: SET_LOADING });

	return (
		<LinkContext.Provider
			value={{
				links: state.links,
				current: state.current,
				error: state.error,
				isSaved: state.isSaved,
				getLinks,
				addLink,
				setCurrent,
				updateCurrent,
				clearCurrent,
				updateLink,
				deleteLink,
				clearErrors,
				loading: state.loading
			}}
		>
			{props.children}
		</LinkContext.Provider>
	);
};

export default LinkState;
