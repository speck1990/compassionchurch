import React, { useReducer } from "react";
import axios from "axios";
import SettingContext from "./settingContext";
import settingReducer from "./settingReducer";
import * as Yup from "yup";
import { validator } from "../../validation/validator";
import { GET_SETTINGS, UPDATE_CURRENT, UPDATE_SETTINGS, SETTING_ERROR, SET_LOADING } from "../types";

const SettingState = props => {
	const initalState = {
		settings: null,
		isSaved: false,
		error: "",
		loading: false
	};

	const validationSchema = Yup.object().shape({
		facebook: Yup.string()
			.url("Please enter a valid url")
			.test("facebook", "Please enter a valid facebook url", function (value) {
				return !value || /facebook.com/.test(value);
			}),
		instagram: Yup.string()
			.required("Required")
			.url("Please enter a valid url")
			.test("instagram", "Please enter a valid instagram url", function (value) {
				return !value || /instagram.com/.test(value);
			}),
		twitter: Yup.string()
			.url("Please enter a valid url")
			.test("twitter", "Please enter a valid twitter url", function (value) {
				return !value || /twitter.com/.test(value);
			}),
		youtube: Yup.string()
			.url("Please enter a valid url")
			.test("youtube", "Please enter a valid youtube url", function (value) {
				return !value || /youtube.com/.test(value);
			})
	});

	const [state, dispatch] = useReducer(settingReducer, initalState);

	const getSettings = async () => {
		setLoading();

		try {
			const res = await axios.get("http://localhost:5000/api/settings");
			dispatch({ type: GET_SETTINGS, payload: res.data });
		} catch (err) {
			dispatch({
				type: SETTING_ERROR,
				payload: err
			});
		}
	};

	const updateSettings = async settings => {
		setLoading();

		const config = {
			headers: {
				"Content-Type": "application/json"
			}
		};

		try {
			const errors = await validator(settings, validationSchema);

			if (errors) {
				return dispatch({ type: SETTING_ERROR, payload: errors });
			}

			const res = await axios.put(`http://localhost:5000/api/settings`, settings, config);
			dispatch({ type: UPDATE_SETTINGS, payload: res.data });
		} catch (err) {
			dispatch({
				type: SETTING_ERROR,
				payload: err
			});
		}
	};

	const updateCurrent = current => {
		dispatch({ type: UPDATE_CURRENT, payload: current });
	};

	const setLoading = () => dispatch({ type: SET_LOADING });

	return (
		<SettingContext.Provider
			value={{
				settings: state.settings,
				isSaved: state.isSaved,
				error: state.error,
				getSettings,
				updateCurrent,
				updateSettings,
				loading: state.loading
			}}
		>
			{props.children}
		</SettingContext.Provider>
	);
};

export default SettingState;
