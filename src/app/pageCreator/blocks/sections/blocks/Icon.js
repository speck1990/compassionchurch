import React, { Fragment } from "react";
import IconPicker from "react-icon-picker";
import { Form } from "react-bootstrap";

const icons = ["fas fa-camera", "fa fa-fish", "fa fa-align-center", "fa fa-align-justify"];

const Icon = ({ value, onChange, name, label, error, text }) => {
	return (
		<Fragment>
			<label htmlFor={name} className="form-label mg-b-0 mg-t-8">
				{label}
			</label>
			<IconPicker icons={icons} defaultValue={value} onChange={onChange} />
			{error ? (
				<Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
			) : (
				<Form.Text className="text-muted" style={!text ? { marginBottom: "20px" } : {}}>
					{text}
				</Form.Text>
			)}
		</Fragment>
	);
};

export default Icon;
