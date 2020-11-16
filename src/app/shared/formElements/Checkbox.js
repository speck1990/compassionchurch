import React from "react";
import { Form } from "react-bootstrap";

const Checkbox = props => {
	return (
		<div className="row row-xs align-items-center mg-b-20">
			<div className="col-md-4"></div>
			<div className="col-md-5 mg-t-5 mg-md-t-0">
				<Form.Check type="checkbox" name={props.name} id={props.name} label={props.label} defaultChecked={props.value} className="ckbox" onChange={e => props.onCheckboxChange(props.value, e)} />
			</div>
		</div>
	);
};

export default Checkbox;
