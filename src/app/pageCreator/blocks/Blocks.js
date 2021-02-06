import React, { Fragment, useContext } from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { Button } from "react-bootstrap";
import BlockItems from "./blocks/BlockItems";
import PageContext from "../../context/page/pageContext";

const Blocks = ({ blocks }) => {
	const pageContext = useContext(PageContext);
	const { deleteBlock } = pageContext;

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
											<div {...provided.draggableProps} ref={provided.innerRef} className="bg-white mg-b-10">
												<div className="btn-icon-list">
													<div {...provided.dragHandleProps}>
														<i className="fas fa-arrows-alt"></i>
													</div>
													<Button variant="btn-icon" onClick={() => deleteBlock(block._id)}>
														<i className="fas fa-times"></i>
													</Button>
												</div>
												{BlockItems(block, key)}
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
