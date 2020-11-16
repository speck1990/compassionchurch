import React, { useContext } from "react";
import PageContext from "../../context/page/pageContext";
import { Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

const Input = props => {
	const pageContext = useContext(PageContext);
	const { current, updateCurrent } = pageContext;

	const onTextChange = e => updateCurrent({ ...current, [e.target.name]: e.target.value });
	const setDate = (date, name) => updateCurrent({ ...current, [name]: date });

	return (
		<div className={`row row-xs mg-b-20 ${props.as !== "textarea" && "align-items-center"}`}>
			<div className="col-md-4">
				<label htmlFor={props.name} className="form-label mg-b-0">
					{props.label}
				</label>
			</div>
			<div className="col-md-8 mg-t-5 mg-md-t-0">
				{props.type === "date" ? (
					<div className="input-group">
						<div className="input-group-prepend">
							<div className="input-group-text">
								<i className="typcn typcn-calendar-outline tx-24 lh--9 op-6"></i>
							</div>
						</div>
						<DatePicker selected={props.value ? moment(props.value).toDate() : null} onChange={date => setDate(date, props.name)} placeholderText={props.placeholderText} className="form-control" style={{ "z-index": 3 }} showTimeSelect isClearable dateFormat="MM/dd/yyyy h:mm aa" />
					</div>
				) : (
					<Form.Control {...props} onChange={onTextChange} autoComplete="off" />
				)}
			</div>
		</div>
	);
};

export default Input;
