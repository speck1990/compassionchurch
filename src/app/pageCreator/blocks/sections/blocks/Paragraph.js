import React, { Fragment } from "react";
import ReactQuill from "react-quill";
import { Form } from "react-bootstrap";
import "react-quill/dist/quill.snow.css";

const Paragraph = ({ text, onChange }) => {
	const err = false;

	const modules = {
		toolbar: [["bold", "italic", "underline"], [{ align: [false, "center", "right"] }], ["link"], [{ indent: "-1" }, { indent: "+1" }], ["clean"], [{ list: "ordered" }, { list: "bullet" }]]
	};

	const formats = ["bold", "italic", "underline", "indent", "link", "align", "list"];

	return (
		<Fragment>
			<ReactQuill modules={modules} formats={formats} value={text || ""} onChange={onChange} className={err && "is-invalid"} />
			<Form.Control.Feedback type="invalid">{err}</Form.Control.Feedback>
		</Fragment>
	);
};

export default Paragraph;
