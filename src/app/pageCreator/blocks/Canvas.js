import React from "react";
import { Droppable } from "react-beautiful-dnd";
import Blocks from "./Blocks";

const Canvas = ({ blocks, isDropDisabled }) => {
	return (
		<div className="block-item-container">
			<Droppable droppableId="canvas" isDropDisabled={isDropDisabled}>
				{(provided, snapshot) => (
					<div ref={provided.innerRef} {...provided.droppableProps}>
						{blocks.length === 0 ? (
							<div
								className="no-blocks bg-gray-100"
								style={{
									background: snapshot.isDraggingOver && "lightblue"
								}}
							>
								<p>Drag and drop content block here.</p>
							</div>
						) : (
							<Blocks blocks={blocks} isDropDisabled={!isDropDisabled} />
						)}

						{provided.placeholder}
					</div>
				)}
			</Droppable>
		</div>
	);
};

export default Canvas;
