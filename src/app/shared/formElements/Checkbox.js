import React from "react";
import { Form } from "react-bootstrap";

const Checkbox = props => {
	return (
		<div className="row row-xs align-items-center mg-b-15">
			<div className="col-md-4"></div>
			<div className="col-md-5 mg-t-5 mg-md-t-0">
				<Form.Check type="checkbox" name={props.name} id={props.name} label={props.label} defaultChecked={props.value} className={props.error ? "is-invalid ckbox" : "chkbox"} onChange={e => props.onCheckboxChange(props.value, e)} />
				{props.error ? (
					<Form.Control.Feedback type="invalid">{props.error}</Form.Control.Feedback>
				) : (
					<Form.Text className="text-muted" style={!props.text ? { marginBottom: "20px" } : {}}>
						{props.text}
					</Form.Text>
				)}
			</div>
		</div>
	);
};

export default Checkbox;
