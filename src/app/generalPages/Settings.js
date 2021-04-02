import React, { useEffect, useContext } from "react";
import { Alert } from "react-bootstrap";
import SettingContext from "../context/setting/settingContext";
import Input from "../shared/formElements/Input";
import Checkbox from "../shared/formElements/Checkbox";
import SaveCancel from "../shared/formElements/SaveCancel";

const Settings = () => {
	const settingContext = useContext(SettingContext);

	const { settings, updateCurrent, getSettings, updateSettings, isSaved, loading, error } = settingContext;

	useEffect(() => {
		getSettings();
		// eslint-disable-next-line
	}, []);

	useEffect(() => {
		error !== "" &&
			window.scrollTo({
				top: 0,
				behavior: "smooth"
			});
	}, [error]);

	const onTextChange = e => updateCurrent({ ...settings, [e.target.name]: e.target.value });
	const onCheckboxChange = (value, e) => updateCurrent({ ...settings, [e.target.name]: !value });

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
								{error !== "" && <Alert variant="danger">Please fix the errors before saving.</Alert>}
								{isSaved && <Alert variant="success">Settings Saved!</Alert>}
								<form onSubmit={handleSave}>
									<div className="wd-xl-50p mg-y-50">
										<h4 className="mg-y-20">Social Media</h4>
										<Input label="Facebook" name="facebook" type="text" text="(ex. http://www.facebook.com/church)" value={settings.facebook} error={error.facebook} onChange={onTextChange} />
										<Input label="Instagram" name="instagram" type="text" text="(ex. http://www.instagram.com/church)" value={settings.instagram} error={error.instagram} onChange={onTextChange} />
										<Input label="Twitter" name="twitter" type="text" text="(ex. http://www.twitter.com/church)" value={settings.twitter} error={error.twitter} onChange={onTextChange} />
										<Input label="Youtube" name="youtube" type="text" text="(ex. http://www.youtube.com/church)" value={settings.youtube} error={error.youtube} onChange={onTextChange} />
									</div>

									<div className="wd-xl-50p">
										<h4 className="mg-y-20">Site</h4>
										<Input label="Footer Note" name="footerNote" as="textarea" value={settings.footerNote} error={error.footerNote} rows="3" onChange={onTextChange} />
									</div>

									<div className="wd-xl-50p">
										<h4 className="mg-y-20">Giving</h4>
										<Checkbox name="giving" small={true} label="Show giving button in Navigation bar" value={settings.giving} error={error.giving} onCheckboxChange={onCheckboxChange} />
										{settings.giving && <Input label="Link" name="givingLink" type="text" text="(ex. https://churchname.churchcenter.com/giving)" value={settings.givingLink} error={error.givingLink} onChange={onTextChange} />}
									</div>

									<div className="wd-xl-50p">
										<h4 className="mg-y-20">Livestream</h4>
										<Checkbox name="livestream" small={true} label="Show livestream button in Navigation bar" value={settings.livestream} error={error.livestream} onCheckboxChange={onCheckboxChange} />
										{settings.livestream && <Input label="Link" name="livestreamLink" type="text" text="(ex. https://www.facebook.com/churchname/live)" value={settings.livestreamLink} error={error.livestreamLink} onChange={onTextChange} />}
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
