import React, { useEffect, useContext } from "react";
import SettingContext from "../context/setting/settingContext";
import Input from "../shared/formElements/Input";
import SaveCancel from "../shared/formElements/SaveCancel";

const Settings = () => {
	const settingContext = useContext(SettingContext);

	const { current, updateCurrent, getSettings, updateSettings, loading } = settingContext;

	useEffect(() => {
		getSettings();

		// eslint-disable-next-line
	}, []);

	const onTextChange = e => updateCurrent({ ...current, [e.target.name]: e.target.value });

	const handleSave = () => updateSettings(current);

	return (
		<div>
			<div className="container d-flex p-md-0">
				<div className="az-content-body pd-lg-l-40 d-flex flex-column">
					<div>
						{current !== null && !loading ? (
							<div>
								<h2 className="az-content-title">Settings</h2>
								<form onSubmit={handleSave}>
									<div className="wd-xl-50p">
										<Input label="Facebook" name="facebook" type="text" value={current.facebook} onChange={onTextChange} />
										<Input label="Instagram" name="instagram" type="text" value={current.instagram} onChange={onTextChange} />
										<Input label="Twitter" name="twitter" type="text" value={current.twitter} onChange={onTextChange} />
										<Input label="Youtube" name="youtube" type="text" value={current.youtube} onChange={onTextChange} />
									</div>

									<hr className="mg-y-30" />

									<SaveCancel onSave={handleSave} redirect="/settings" />
								</form>
							</div>
						) : (
							<p></p>
						)}
					</div>

					<div className="ht-40"></div>
				</div>
				{/* az-content-body */}
			</div>
			{/* container */}
		</div>
	);
};

export default Settings;
