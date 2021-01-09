import React, { useContext } from "react";
import { Fragment } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import PageContext from "../../../context/page/pageContext";

const Paragraph = ({ block, index }) => {
	const pageContext = useContext(PageContext);

	const { current, updateCurrent, deleteBlock } = pageContext;

	const modules = {
		toolbar: [["bold", "italic", "underline"], [{ align: [false, "center", "right"] }], ["link"], [{ indent: "-1" }, { indent: "+1" }], ["clean"]]
	};

	const formats = ["bold", "italic", "underline", "indent", "link", "align"];

	const handleOnChange = value => updateCurrent({ ...current, content: current.content.map(el => (el._id === block._id ? { _id: block._id, type: "paragraph", text: value } : el)) });

	return (
		<Fragment>
			<button onClick={() => deleteBlock(block._id)} type="button">
				Delete Below
			</button>
			<ReactQuill modules={modules} formats={formats} value={block.text || ""} onChange={handleOnChange} />
		</Fragment>
	);
};

export default Paragraph;
