import React, { useContext } from "react";
import { Draggable } from "react-beautiful-dnd";
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

	const handleOnChange = value => updateCurrent({ ...current, content: current.content.map(el => (el._id === block._id ? { id: block._id, type: "paragraph", text: value } : el)) });

	return (
		<Draggable draggableId={`draggable-${block._id}`} index={index}>
			{provided => (
				<div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} className="bg-white">
					<button onClick={() => deleteBlock(block._id)}>Delete Below</button>
					<ReactQuill modules={modules} formats={formats} value={block.text || ""} onChange={handleOnChange} />
				</div>
			)}
		</Draggable>
	);
};

export default Paragraph;
