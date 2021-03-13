import React, { useContext, Fragment } from "react";
import ReactQuill from "react-quill";
import { Form } from "react-bootstrap";
import "react-quill/dist/quill.snow.css";
import PageContext from "../../../context/page/pageContext";

const Paragraph = ({ block, parent, index }) => {
	const pageContext = useContext(PageContext);

	const { current, updateCurrent, error } = pageContext;

	const err = error?.[`content[${parent.index}].content[${index}].text`];

	const modules = {
		toolbar: [["bold", "italic", "underline"], [{ align: [false, "center", "right"] }], ["link"], [{ indent: "-1" }, { indent: "+1" }], ["clean"], [{ list: "ordered" }, { list: "bullet" }]]
	};

	const formats = ["bold", "italic", "underline", "indent", "link", "align", "list"];

	const handleOnChange = value => {
		const updatedBlock = { _id: block._id, type: "paragraph", text: value };

		const parentSection = current.content.find(section => section._id === parent._id);
		const newBlocks = parentSection.content.map(bl => (bl._id === block._id ? updatedBlock : bl));
		parentSection.content = newBlocks;

		updateCurrent({ ...current, content: current.content.map(section => (section._id === parent._id ? parentSection : section)) });
	};

	return (
		<Fragment>
			<ReactQuill modules={modules} formats={formats} value={block.text || ""} onChange={handleOnChange} className={err && "is-invalid"} />
			<Form.Control.Feedback type="invalid">{err}</Form.Control.Feedback>
		</Fragment>
	);
};

export default Paragraph;
