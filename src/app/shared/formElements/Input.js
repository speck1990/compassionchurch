import React, { Fragment } from "react";
import { Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

const Input = props => {
	return (
		<div className="row row-xs mg-b-10">
			<div className="col-md-4">
				<label htmlFor={props.name} className="form-label mg-b-0 mg-t-8">
					{props.label}
				</label>
			</div>
			<div className="col-md-8 mg-t-5 mg-md-t-0">
				{props.type === "date" ? (
					<Fragment>
						<div className="input-group">
							<div className="input-group-prepend">
								<div className="input-group-text">
									<i className="typcn typcn-calendar-outline tx-24 lh--9 op-6"></i>
								</div>
							</div>
							<DatePicker
								minDate={moment().toDate() - 1}
								selected={props.value ? moment(props.value).toDate() : null}
								onChange={date => props.onChange(date, props)}
								className={props.error ? "form-control is-invalid" : "form-control"}
								placeholderText={props.placeholderText}
								style={{ "z-index": 3 }}
								showTimeSelect
								isClearable
								dateFormat="MM/dd/yyyy h:mm aa"
								autoComplete="off"
							/>
						</div>
						{props.error ? (
							<Form.Control.Feedback type="invalid" style={{ display: "block" }}>
								{props.error}
							</Form.Control.Feedback>
						) : (
							<Form.Text className="text-muted" style={!props.text ? { marginBottom: "20px" } : {}}>
								{props.text}
							</Form.Text>
						)}
					</Fragment>
				) : (
					<Fragment>
						<Form.Control {...props} autoComplete="off" isInvalid={!!props.error} />
						{props.error ? (
							<Form.Control.Feedback type="invalid">{props.error}</Form.Control.Feedback>
						) : (
							<Form.Text className="text-muted" style={!props.text ? { marginBottom: "20px" } : {}}>
								{props.text}
							</Form.Text>
						)}
					</Fragment>
				)}
			</div>
		</div>
	);
};

export default Input;
