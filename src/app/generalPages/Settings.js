import React, { useEffect, useContext } from "react";
import { Alert } from "react-bootstrap";
import SettingContext from "../context/setting/settingContext";
import Input from "../shared/formElements/Input";
import SaveCancel from "../shared/formElements/SaveCancel";

const Settings = () => {
	const settingContext = useContext(SettingContext);

	const { settings, updateCurrent, getSettings, updateSettings, isSaved, loading, error } = settingContext;

	useEffect(() => {
		getSettings();
		// eslint-disable-next-line
	}, []);

	const onTextChange = e => updateCurrent({ ...settings, [e.target.name]: e.target.value });

	const handleSave = () => updateSettings(settings);

	return (
		<div>
			<div className="container d-flex p-md-0">
				<div className="az-content-body pd-lg-l-40 d-flex flex-column">
					<div>
						{settings !== null && !loading ? (
							<div>
								<h2 className="az-content-title">
									Settings{" "}
									{loading && (
										<div className="spinner-border text-primary" role="status">
											<span className="sr-only">Loading...</span>
										</div>
									)}
								</h2>
								{error.length > 0 && (
									<Alert variant="danger">
										{error.map((err, key) => (
											<div key={key}>{err.msg}</div>
										))}
									</Alert>
								)}
								{isSaved && <Alert variant="success">Settings Saved!</Alert>}
								<form onSubmit={handleSave}>
									<div className="wd-xl-50p">
										<Input label="Facebook" name="facebook" type="text" value={settings.facebook} onChange={onTextChange} />
										<Input label="Instagram" name="instagram" type="text" value={settings.instagram} onChange={onTextChange} />
										<Input label="Twitter" name="twitter" type="text" value={settings.twitter} onChange={onTextChange} />
										<Input label="Youtube" name="youtube" type="text" value={settings.youtube} onChange={onTextChange} />
									</div>

									<hr className="mg-y-30" />

									<SaveCancel onSave={handleSave} showCancel={false} />
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
