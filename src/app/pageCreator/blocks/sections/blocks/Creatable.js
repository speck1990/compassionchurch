import React, { Fragment } from "react";
import { default as SelectInput } from "react-select";
import CreatableInput from "react-select/creatable";

import { Form } from "react-bootstrap";

const Creatable = props => {
	const customStyles = props.error && {
		valueContainer: (provided, state) => ({
			...provided,
			paddingRight: "calc(2.0em + 1.0rem)"
		}),
		control: (provided, state) => ({
			...provided,
			borderColor: "#dc3545",
			backgroundRepeat: "no-repeat",
			backgroundPosition: "right calc(2.0em + 1.0rem) center",
			backgroundSize: "calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)",
			backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e")`,
			"&:hover": {
				borderColor: state.isFocused && "#dc3545"
			}
		})
	};

	return (
		<Fragment>
			<label htmlFor={props.name} className="form-label mg-b-0 mg-t-8">
				{props.label}
			</label>

			<CreatableInput {...props} styles={customStyles} className="is-invalid" />

			{/* <SelectInput {...props} styles={customStyles} className={props.error && "is-invalid"} /> */}
			{/* {props.error ? ( */}
			<Form.Control.Feedback type="invalid">{props.error}</Form.Control.Feedback>
			{/* ) : (
				<Form.Text className="text-muted" style={!props.text ? { marginBottom: "20px" } : {}}>
					{props.text}
				</Form.Text>
			)} */}
		</Fragment>
	);
};

export default Creatable;
