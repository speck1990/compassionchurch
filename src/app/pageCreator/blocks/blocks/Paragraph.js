import React, { useContext, Fragment } from "react";
import ReactQuill from "react-quill";
import { Form } from "react-bootstrap";
import "react-quill/dist/quill.snow.css";
import PageContext from "../../../context/page/pageContext";

const Paragraph = ({ block, index }) => {
	const pageContext = useContext(PageContext);

	const { current, updateCurrent, error } = pageContext;

	const err = error?.[`content[${index}].text`];

	const modules = {
		toolbar: [["bold", "italic", "underline"], [{ align: [false, "center", "right"] }], ["link"], [{ indent: "-1" }, { indent: "+1" }], ["clean"], [{ list: "ordered" }, { list: "bullet" }]]
	};

	const formats = ["bold", "italic", "underline", "indent", "link", "align", "list"];

	const handleOnChange = value => updateCurrent({ ...current, content: current.content.map(el => (el._id === block._id ? { _id: block._id, type: "paragraph", text: value } : el)) });

	return (
		<Fragment>
			<ReactQuill modules={modules} formats={formats} value={block.text || ""} onChange={handleOnChange} className={err && "is-invalid"} />
			<Form.Control.Feedback type="invalid">{err}</Form.Control.Feedback>
		</Fragment>
	);
};

export default Paragraph;
