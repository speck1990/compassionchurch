import React, { Fragment } from "react";
import ReactQuill from "react-quill";
import { Form } from "react-bootstrap";
import "react-quill/dist/quill.snow.css";

const Paragraph = ({ value, text, onChange, name, label, error }) => {
	// const modules = {
	// 	toolbar: [["bold", "italic", "underline"], [{ align: [false, "center", "right"] }], ["link"], [{ indent: "-1" }, { indent: "+1" }], ["clean"], [{ list: "ordered" }, { list: "bullet" }]]
	// };

	const modules = {
		toolbar: [["bold", "italic", "underline"]]
	};

	const formats = ["bold", "italic", "underline", "indent", "link", "align", "list"];

	return (
		<Fragment>
			<label htmlFor={name} className="form-label mg-b-0 mg-t-8">
				{label}
			</label>
			<ReactQuill modules={modules} formats={formats} value={value || ""} onChange={onChange} className={error && "is-invalid"} />
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

export default Paragraph;
