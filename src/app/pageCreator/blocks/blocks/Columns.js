import React, { useContext } from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import BlockItems from "../blocks/BlockItems";
import PageContext from "../../../context/page/pageContext";

const temp = {
	type: "column",
	columns: [
		{
			id: 1,
			blocks: [
				{ id: 1, type: "paragraph", text: "<p>column 1, row 1</p>" },
				{ id: 1, type: "paragraph", text: "<p>column 1, row 2</p>" }
			]
		},
		{
			id: 2,
			blocks: [
				{ id: 1, type: "paragraph", text: "<p>column 2, row 1</p>" },
				{ id: 1, type: "paragraph", text: "<p>column 2, row 2</p>" }
			]
		}
	]
};

const Columns = ({ block, index }) => {
	const pageContext = useContext(PageContext);

	const { current, updateCurrent, deleteBlock } = pageContext;

	// const handleOnChange = value => updateCurrent({ ...current, content: current.content.map(el => (el._id === block._id ? { _id: block._id, type: "paragraph", text: value } : el)) });

	return (
		<div className="row column-blocks">
			{block.columns.map((column, key) => (
				<div className="col-md-6">
					<Droppable droppableId="blocks">
						{(provided, snapshot) => (
							<div ref={provided.innerRef} {...provided.droppableProps}>
								{column.blocks.length === 0 ? (
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
										{column.blocks.map((block, key) => (
											<div key={key}>
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
			))}
		</div>
	);
};

export default Columns;
