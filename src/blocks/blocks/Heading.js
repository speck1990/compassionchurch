import React, { useContext } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import PageContext from "../../context/page/pageContext";

const Heading = ({ block }) => {
	const pageContext = useContext(PageContext);

	const { current, updateCurrent } = pageContext;

	const modules = {
		toolbar: [[{ header: [1, 2] }], [{ align: [false, "center", "right"] }]]
	};

	const formats = ["header", "align"];

	const handleOnChange = value => updateCurrent({ ...current, content: current.content.map(el => (el.id === block.id ? { id: block.id, type: "heading", text: value } : el)) });

	return <ReactQuill modules={modules} formats={formats} value={block.text} onChange={handleOnChange} />;
};

export default Heading;
