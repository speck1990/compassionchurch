import React, { useContext } from "react";
import { Fragment } from "react";
import { Droppable } from "react-beautiful-dnd";
import Blocks from "../Blocks";
import PageContext from "../../../context/page/pageContext";

const Section = ({ block, isDropDisabled, index }) => {
	const pageContext = useContext(PageContext);

	const { error } = pageContext;

	const err = error?.[`content[${index}].content`];

	const parent = {
		...block,
		index
	};

	return (
		<div style={{ backgroundColor: "#c7c7c7", padding: "10px" }}>
			<Droppable droppableId={block._id} isDropDisabled={isDropDisabled}>
				{(provided, snapshot) => (
					<Fragment>
						<h2>Section</h2>
						<div ref={provided.innerRef} {...provided.droppableProps}>
							{block.content.length === 0 ? (
								<div
									className="no-blocks bg-gray-100"
									style={{
										background: snapshot.isDraggingOver && "lightblue",
										border: err && "1px solid #dc3545"
									}}
								>
									<p>Drag and drop content block here.</p>
								</div>
							) : (
								<Blocks blocks={block.content} parent={parent} />
							)}

							{provided.placeholder}
						</div>
					</Fragment>
				)}
			</Droppable>
		</div>
	);
};

export default Section;
