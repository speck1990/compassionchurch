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
					{blockTypes.map((type, key) => (
						<Draggable key={key} draggableId={`draggable-${type}`} index={key}>
							{(provided, snapshot) => (
								<Fragment>
									<div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} style={provided.draggableProps.style} className="mg-b-10">
										<Button variant="primary btn-rounded mg-l-5 mg-r-5" key={key}>
											{type}
										</Button>
									</div>
									{snapshot.isDragging && (
										<div className="dragging-static-copy mg-b-10">
											<Button variant="primary btn-rounded mg-l-5 mg-r-5" key={key}>
												{type}
											</Button>
										</div>
									)}
								</Fragment>
							)}
						</Draggable>
					))}
					{provided.placeholder}
				</div>
			)}
		</Droppable>
	);
};

export default BlockOptions;
