import React from "react";
import { default as SelectInput } from "react-select";

const Select = props => {
	return (
		<div className="row row-xs align-items-center mg-b-20">
			<div className="col-md-4">
				<label htmlFor={props.name} className="form-label mg-b-0">
					{props.label}
				</label>
			</div>
			<div className="col-md-5 mg-t-5 mg-md-t-0">
				<SelectInput {...props} />
			</div>
		</div>
	);
};

export default Select;
