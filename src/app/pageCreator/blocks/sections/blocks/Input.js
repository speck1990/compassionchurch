import React, { Fragment } from "react";
import { Form } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";

const Input = props => {
	return (
		<Fragment>
			<label htmlFor={props.name} className="form-label mg-b-0 mg-t-8">
				{props.label}
			</label>
			<Form.Control {...props} autoComplete="off" isInvalid={!!props.error} />
			{props.error ? (
				<Form.Control.Feedback type="invalid">{props.error}</Form.Control.Feedback>
			) : (
				<Form.Text className="text-muted" style={!props.text ? { marginBottom: "20px" } : {}}>
					{props.text}
				</Form.Text>
			)}
		</Fragment>
	);
};

export default Input;
