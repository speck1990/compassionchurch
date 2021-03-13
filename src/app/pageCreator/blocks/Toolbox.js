import React, { Fragment } from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import blockTypes from "./blockTypes";
import { uppercase } from "../../utils/helpers";

const Toolbox = () => {
	return (
		<div className="toolbox-container">
			<div className="toolbox">
				<Droppable droppableId="toolbox" isDropDisabled={true}>
					{provided => (
						<div className="az-icon-group bg-gray-200 mg-b-40" ref={provided.innerRef}>
							{blockTypes.map(({ type, icon }, key) => (
								<Draggable key={type} draggableId={type} index={key}>
									{(provided, snapshot) => (
										<Fragment>
											<div className="toolbox-item bg-gray-300" {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} style={provided.draggableProps.style}>
												<i className={icon}></i>
												<div>{uppercase(type)}</div>
											</div>
											{snapshot.isDragging && (
												<div className="dragging-static-copy toolbox-item bg-gray-300">
													<i className={icon}></i>
													<div>{uppercase(type)}</div>
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
			</div>
		</div>
	);
};

export default Toolbox;
