import React, { useContext, Fragment } from "react";
import { Form } from "react-bootstrap";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import PageContext from "../../../context/page/pageContext";

let Quill = ReactQuill.Quill;

let BlockBlot = Quill.import("blots/block");

// class BoldBlot extends Inline {}
// BoldBlot.blotName = "bold";
// BoldBlot.tagName = "h1";
// BoldBlot.className = "custom-bold";

class HeaderBlot extends BlockBlot {}
HeaderBlot.blotName = "header";
HeaderBlot.tagName = ["H2", "H3"];

// class HeaderBlot extends BlockBlot {}
// HeaderBlot.blotName = "header";
// HeaderBlot.tagName = "p";

Quill.register(HeaderBlot);

const Heading = ({ block, parent, index }) => {
	const pageContext = useContext(PageContext);

	const { current, updateCurrent, error } = pageContext;

	const err = error?.[`content[${parent.index}].content[${index}].text`];

	const modules = {
		toolbar: [[{ header: [1, 2] }], [{ align: [false, "center", "right"] }]]
	};

	const formats = ["header", "align"];

	const handleOnChange = value => {
		const updatedBlock = { _id: block._id, type: "heading", text: value };

		const parentSection = current.content.find(section => section._id === parent._id);
		const newBlocks = parentSection.content.map(bl => (bl._id === block._id ? updatedBlock : bl));
		parentSection.content = newBlocks;

		updateCurrent({ ...current, content: current.content.map(section => (section._id === parent._id ? parentSection : section)) });
	};

	return (
		<Fragment>
			<ReactQuill modules={modules} formats={formats} value={block.text || "<h1><br></h1>"} onChange={handleOnChange} className={err && "is-invalid"} />
			<Form.Control.Feedback type="invalid">{err}</Form.Control.Feedback>
		</Fragment>
	);
};

export default Heading;
