import React, { useContext, Fragment } from "react";
import { Form } from "react-bootstrap";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import PageContext from "../../../context/page/pageContext";

const Heading = ({ block, index }) => {
	const pageContext = useContext(PageContext);

	const { current, updateCurrent } = pageContext;

	const modules = {
		toolbar: [[{ header: [1, 2] }], [{ align: [false, "center", "right"] }]]
	};

	const formats = ["header", "align"];

	const handleOnChange = value => updateCurrent({ ...current, content: current.content.map(el => (el._id === block._id ? { _id: block._id, type: "heading", text: value } : el)) });

	return (
		<Fragment>
			<ReactQuill modules={modules} formats={formats} value={block.text || "<h1><br></h1>"} onChange={handleOnChange} className="is-invalid" />
			<Form.Control.Feedback type="invalid"></Form.Control.Feedback>
		</Fragment>
	);
};

export default Heading;
