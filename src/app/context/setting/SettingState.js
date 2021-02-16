import React, { useReducer } from "react";
import axios from "axios";
import SettingContext from "./settingContext";
import settingReducer from "./settingReducer";
import { GET_SETTINGS, UPDATE_CURRENT, UPDATE_SETTINGS, SETTING_ERROR, SET_LOADING } from "../types";

const SettingState = props => {
	const initalState = {
		settings: null,
		isSaved: false,
		error: [],
		loading: false
	};

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
			const res = await axios.put(`http://localhost:5000/api/settings`, settings, config);
			dispatch({ type: UPDATE_SETTINGS, payload: res.data });
		} catch (err) {
			dispatch({
				type: SETTING_ERROR,
				payload: err
			});
		}
	};

	const updateCurrent = settings => {
		dispatch({ type: UPDATE_CURRENT, payload: settings });
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
