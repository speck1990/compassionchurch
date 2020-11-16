import React from "react";
import { Form } from "react-bootstrap";

const Radio = props => {
	return (
		<div>
			<div className="row row-xs align-items-center mg-b-20">
				<div className="col-md-4">
					<label htmlFor="type" className="form-label mg-b-0">
						{props.label}
					</label>
				</div>
				{props.options.map((option, key) => (
					<div key={key} className="col-md-4 mg-t-5 mg-md-t-0">
						<Form.Check onChange={props.onChange} type="radio" name={props.name} id={option.name} value={option.value} label={option.label} className="rdiobox" checked={props.checkedValue === option.value} />
					</div>
				))}
			</div>
		</div>
	);
};

export default Radio;
