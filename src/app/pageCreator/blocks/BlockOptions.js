import React, { Fragment, useContext } from "react";
import PageContext from "../../context/page/pageContext";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { Button } from "react-bootstrap";

const BlockOptions = () => {
	const pageContext = useContext(PageContext);

	const { blockTypes } = pageContext;

	return (
		<Droppable droppableId="options" isDropDisabled={true}>
			{(provided, snapshot) => (
				<div ref={provided.innerRef}>
					<div className="az-icon-group bg-gray-200">
						<div className="row row-xs">
							{blockTypes.map((block, key) => (
								<Draggable key={key} draggableId={`draggable-${block.type}`} index={key}>
									{(provided, snapshot) => (
										<Fragment>
											<div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} style={provided.draggableProps.style} className="col">
												<i class={block.icon}></i>
												<div>{block.type}</div>
											</div>
											{snapshot.isDragging && (
												<div className="dragging-static-copy col">
													<i class={block.icon}></i>
													<div>{block.type}</div>
												</div>
											)}
										</Fragment>
									)}
								</Draggable>
							))}
							{provided.placeholder}
						</div>
					</div>
				</div>
			)}
		</Droppable>
	);
};

export default BlockOptions;
