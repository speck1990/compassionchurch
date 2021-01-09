import React, { Fragment } from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import AddBlock from "./AddBlock";
import BlockItems from "./blocks/BlockItems";

const Blocks = ({ blocks, isVisible }) => {
	return (
		<Fragment>
			{blocks.length === 0 ? (
				<p></p>
			) : (
				<Droppable droppableId="blocks">
					{provided => (
						<div ref={provided.innerRef} {...provided.droppableProps}>
							{blocks.map((block, key) => (
								<div key={block._id}>
									<Draggable draggableId={`draggable-${block._id}`} index={key}>
										{provided => (
											<div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} className="bg-white mg-b-10">
												{BlockItems(block, key)}
												<AddBlock location={key} isVisible={isVisible} />
											</div>
										)}
									</Draggable>
								</div>
							))}
							{provided.placeholder}
						</div>
					)}
				</Droppable>
			)}
		</Fragment>
	);
};

export default Blocks;
