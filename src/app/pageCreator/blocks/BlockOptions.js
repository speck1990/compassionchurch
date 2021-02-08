import React, { Fragment, useContext } from "react";
import PageContext from "../../context/page/pageContext";
import { Droppable, Draggable } from "react-beautiful-dnd";

const BlockOptions = () => {
	const pageContext = useContext(PageContext);

	const { blockTypes } = pageContext;

	return (
		<div className="toolbox">
			<div className="toolbox-options">
				<Droppable droppableId="options" isDropDisabled={true}>
					{(provided, snapshot) => (
						<div ref={provided.innerRef}>
							<div className="az-icon-group bg-gray-200 mg-b-40">
								{blockTypes.map((block, key) => (
									<Draggable key={key} draggableId={`draggable-${block.type}`} index={key}>
										{(provided, snapshot) => (
											<Fragment>
												<div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} style={provided.draggableProps.style} className="toolbox-item bg-gray-300">
													<i className={block.icon}></i>
													<div>{block.type.charAt(0).toUpperCase() + block.type.slice(1)}</div>
												</div>
												{snapshot.isDragging && (
													<div className="dragging-static-copy toolbox-item bg-gray-300">
														<i className={block.icon}></i>
														<div>{block.type.charAt(0).toUpperCase() + block.type.slice(1)}</div>
													</div>
												)}
											</Fragment>
										)}
									</Draggable>
								))}
								{provided.placeholder}
							</div>
						</div>
					)}
				</Droppable>
			</div>
		</div>
	);
};

export default BlockOptions;
