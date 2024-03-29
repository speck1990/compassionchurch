import React, { useReducer } from "react";
import axios from "axios";
import SettingContext from "./settingContext";
import settingReducer from "./settingReducer";
import * as Yup from "yup";
import { useValidator } from "../../utils/hooks/useValidator";
import { GET_SETTINGS, UPDATE_CURRENT, UPDATE_SETTINGS, SETTING_ERROR, SET_LOADING, CLEAR_ERRORS } from "../types";

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
			}),
		giving: Yup.boolean(),
		givingLink: Yup.string()
			.url("Please enter a valid url")
			.when("giving", { is: true, then: Yup.string().required("Required") }),
		livestream: Yup.boolean(),
		livestreamLink: Yup.string()
			.url("Please enter a valid url")
			.when("livestream", { is: true, then: Yup.string().required("Required") })
	});

	const validate = useValidator(validationSchema);

	const [state, dispatch] = useReducer(settingReducer, initalState);

	const getSettings = async () => {
		setLoading();
		clearErrors();

		try {
			const res = await axios.get(`${process.env.REACT_APP_URL}/api/settings`);
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
			const errors = await validate(settings, validationSchema);

			if (errors) {
				return dispatch({ type: SETTING_ERROR, payload: errors });
			}

			const res = await axios.put(`${process.env.REACT_APP_URL}/api/settings`, settings, config);
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

	const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

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
