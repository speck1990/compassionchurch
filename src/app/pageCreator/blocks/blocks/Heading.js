import React, { useContext } from "react";
import { Draggable } from "react-beautiful-dnd";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import PageContext from "../../../context/page/pageContext";

const Heading = ({ block, index }) => {
	const pageContext = useContext(PageContext);

	const { current, updateCurrent, deleteBlock } = pageContext;

	const modules = {
		toolbar: [[{ header: [1, 2] }], [{ align: [false, "center", "right"] }]]
	};

	const formats = ["header", "align"];

	const handleOnChange = value => updateCurrent({ ...current, content: current.content.map(el => (el.id === block.id ? { id: block.id, type: "heading", text: value } : el)) });

	return (
		<Draggable draggableId={`draggable-${block.id}`} index={index}>
			{provided => (
				<div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} className="bg-white">
					<button onClick={() => deleteBlock(block.id)}>Delete Below</button>
					<ReactQuill modules={modules} formats={formats} value={block.text || ""} onChange={handleOnChange} />
				</div>
			)}
		</Draggable>
	);
};

export default Heading;
