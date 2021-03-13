import React from "react";
import { Fragment } from "react";
import { Droppable } from "react-beautiful-dnd";
import Blocks from "../Blocks";

const Section = ({ block, isDropDisabled, index }) => {
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
										background: snapshot.isDraggingOver && "lightblue"
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
