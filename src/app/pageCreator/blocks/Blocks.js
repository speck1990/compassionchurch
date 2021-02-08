import React, { useContext } from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import BlockItems from "./blocks/BlockItems";
import PageContext from "../../context/page/pageContext";

const Blocks = ({ blocks }) => {
	const pageContext = useContext(PageContext);
	const { deleteBlock } = pageContext;

	return (
		<div className="block-item-container">
			<Droppable droppableId="blocks">
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
							<div>
								{blocks.map((block, key) => (
									<div key={block._id}>
										<Draggable draggableId={`draggable-${block._id}`} index={key}>
											{provided => (
												<div {...provided.draggableProps} ref={provided.innerRef} className="bg-white mg-b-30">
													<div className="btn-icon-list block-options">
														<div {...provided.dragHandleProps}>
															<i className="fas fa-arrows-alt"></i>
														</div>
														<OverlayTrigger
															key={block._id}
															placement="top"
															overlay={
																<Tooltip id={`tooltip-${block._id}`}>
																	<strong>Delete</strong>
																</Tooltip>
															}
														>
															<Button variant="btn-icon" onClick={() => deleteBlock(block._id)}>
																<i className="fas fa-times"></i>
															</Button>
														</OverlayTrigger>
													</div>
													{BlockItems(block, key)}
												</div>
											)}
										</Draggable>
									</div>
								))}
							</div>
						)}

						{provided.placeholder}
					</div>
				)}
			</Droppable>
		</div>
	);
};

export default Blocks;
