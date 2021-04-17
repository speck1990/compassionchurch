import React, { useReducer } from "react";
import axios from "axios";
import LinkContext from "./linkContext";
import linkReducer from "./linkReducer";
import { useValidator } from "../../utils/hooks/useValidator";
import * as Yup from "yup";
import { GET_LINKS, SET_CURRENT, UPDATE_CURRENT, UPDATE_LINK, CLEAR_CURRENT, LINK_ERROR, ADD_LINK, SET_LOADING, DELETE_LINK, CLEAR_ERRORS } from "../types";

const LinkState = props => {
	const initalState = {
		links: [],
		current: null,
		error: "",
		isSaved: false,
		loading: false
	};

	const validationSchema = Yup.object({
		label: Yup.string()
			.required("Required")
			.test("label", "Label already in use", function (value) {
				return true;
			}),
		linkValue: Yup.string().required("Required")
	});

	const validate = useValidator(validationSchema);

	const [state, dispatch] = useReducer(linkReducer, initalState);

	const getLinks = async () => {
		setLoading();

		try {
			const res = await axios.get(`${process.env.REACT_APP_URL}/api/links`);
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
			const errors = await validate(link);

			if (errors) {
				return dispatch({ type: LINK_ERROR, payload: errors });
			}

			const res = await axios.post(`${process.env.REACT_APP_URL}/api/links`, link, config);
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

		const config = {
			headers: {
				"Content-Type": "application/json"
			}
		};

		try {
			const errors = await validate(link);

			if (errors) {
				return dispatch({ type: LINK_ERROR, payload: errors });
			}

			const res = await axios.put(`${process.env.REACT_APP_URL}/api/links/${link._id}`, link, config);
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
			await axios.delete(`${process.env.REACT_APP_URL}/api/links/${id}`);
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
				const res = await axios.get(`${process.env.REACT_APP_URL}/api/links/${id}`);
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
