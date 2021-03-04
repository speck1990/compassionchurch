import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import PageContext from "./pageContext";
import pageReducer from "./pageReducer";
import * as Yup from "yup";
import { validator } from "../../validation/validator";
import { GET_PAGES, SET_CURRENT, UPDATE_CURRENT, UPDATE_PAGE, CLEAR_CURRENT, PAGE_ERROR, CLEAR_ERRORS, ADD_PAGE, SET_LOADING, DELETE_PAGE } from "../types";

const pageSchema = { title: "", slug: "", hero: null, description: "", publish: null, unpublish: null, visible: true, content: [] };

const PageState = props => {
	const initalState = {
		pages: [],
		current: null,
		error: "",
		isSaved: false,
		loading: false
	};

	const validationSchema = Yup.object({
		title: Yup.string().required("Required"),
		description: Yup.string().required("Required"),
		publish: Yup.date().nullable().default(null),
		unpublish: Yup.date()
			.nullable()
			.default(null)
			.when("publish", (publish, schema) => (publish ? schema.min(publish, "Unpublish must be after publish date") : schema)),
		content: Yup.array().of(
			Yup.lazy(value => {
				switch (value.type) {
					case "heading":
						return Yup.object().shape({
							text: Yup.string().matches(/(?<=>)[^<>]+(?=<\/)/, "Heading Required")
						});
					case "paragraph":
						return Yup.object().shape({
							text: Yup.string().matches(/(?<=>)[^<>]+(?=<\/)/, "Paragraph Required")
						});
					case "button":
						return Yup.object().shape({
							label: Yup.string()
								.required("Required")
								.test("label", "Label already in use", function (value) {
									return true;
								}),
							buttonValue: Yup.string().required("Required")
						});
					default:
						return false;
				}
			})
		)
	});

	const [state, dispatch] = useReducer(pageReducer, initalState);

	const getPages = async () => {
		setLoading();

		try {
			const res = await axios.get("http://localhost:5000/api/pages");
			dispatch({ type: GET_PAGES, payload: res.data });
		} catch (err) {
			dispatch({
				type: PAGE_ERROR,
				payload: err.response.data.msg
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
			const errors = await validator(page, validationSchema);
			if (errors) {
				return dispatch({ type: PAGE_ERROR, payload: errors });
			}

			const res = await axios.post("http://localhost:5000/api/pages", page, config);
			dispatch({ type: ADD_PAGE, payload: res.data });
		} catch (err) {
			dispatch({
				type: PAGE_ERROR,
				payload: err.response.data.errors
			});
		}
	};

	const updatePage = async page => {
		setLoading();

		const config = {
			headers: {
				"Content-Type": "application/json"
			}
		};

		try {
			const errors = await validator(page, validationSchema);
			if (errors) {
				return dispatch({ type: PAGE_ERROR, payload: errors });
			}

			const res = await axios.put(`http://localhost:5000/api/pages/${page._id}`, page, config);
			dispatch({ type: UPDATE_PAGE, payload: res.data });
		} catch (err) {
			console.log(err);
			dispatch({
				type: PAGE_ERROR,
				payload: err
			});
		}
	};

	const deletePage = async id => {
		setLoading();

		try {
			await axios.delete(`http://localhost:5000/api/pages/${id}`);
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
				const res = await axios.get(`http://localhost:5000/api/pages/${id}`);
				dispatch({ type: SET_CURRENT, payload: res.data });
			} catch (err) {
				dispatch({
					type: PAGE_ERROR,
					payload: err.response.data
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
		block._id = uuidv4();

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

	const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

	const setLoading = () => dispatch({ type: SET_LOADING });

	return (
		<PageContext.Provider
			value={{
				pages: state.pages,
				current: state.current,
				error: state.error,
				isSaved: state.isSaved,
				getPages,
				addPage,
				setCurrent,
				updateCurrent,
				clearCurrent,
				addBlock,
				deleteBlock,
				updatePage,
				deletePage,
				clearErrors,
				loading: state.loading
			}}
		>
			{props.children}
		</PageContext.Provider>
	);
};

export default PageState;
