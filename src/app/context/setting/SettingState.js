import React, { useReducer } from "react";
import axios from "axios";
import SettingContext from "./settingContext";
import settingReducer from "./settingReducer";
import { GET_SETTINGS, SET_CURRENT, UPDATE_CURRENT, UPDATE_SETTINGS, CLEAR_CURRENT, SETTING_ERROR, SET_LOADING } from "../types";

const SettingState = props => {
	const initalState = {
		settings: null,
		current: null,
		error: null,
		loading: false
	};

	const [state, dispatch] = useReducer(settingReducer, initalState);

	const getSettings = async () => {
		setLoading();

		try {
			const res = await axios.get("/settings/1");
			dispatch({ type: GET_SETTINGS, payload: res.data });
		} catch (err) {
			dispatch({
				type: SETTING_ERROR,
				payload: err
			});
		}

		setCurrent();
	};

	const updateSettings = async settings => {
		setLoading();

		const config = {
			headers: {
				"Content-Type": "application/json"
			}
		};

		try {
			const res = await axios.put(`/settings/1`, settings, config);
			dispatch({ type: UPDATE_SETTINGS, payload: res.data });
		} catch (err) {
			dispatch({
				type: SETTING_ERROR,
				payload: err
			});
		}

		clearCurrent();
	};

	const setCurrent = async id => {
		setLoading();

		try {
			const res = await axios.get(`/settings/1`);
			dispatch({ type: SET_CURRENT, payload: res.data });
		} catch (err) {
			dispatch({
				type: SETTING_ERROR,
				payload: err
			});
		}
	};

	const clearCurrent = () => {
		dispatch({ type: CLEAR_CURRENT });
	};

	const updateCurrent = current => {
		dispatch({ type: UPDATE_CURRENT, payload: current });
	};

	const setLoading = () => dispatch({ type: SET_LOADING });

	return (
		<SettingContext.Provider
			value={{
				settings: state.settings,
				current: state.current,
				getSettings,
				setCurrent,
				updateCurrent,
				clearCurrent,
				updateSettings,
				loading: state.loading
			}}
		>
			{props.children}
		</SettingContext.Provider>
	);
};

export default SettingState;
