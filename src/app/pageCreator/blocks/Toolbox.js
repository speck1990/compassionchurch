import React, { Fragment, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Sections from "../blocks/sections/Sections";
// import { Droppable, Draggable } from "react-beautiful-dnd";
// import blockTypes from "./blockTypes";
// import { uppercase } from "../../utils/helpers";

const Toolbox = () => {
	const [showSectionModal, setShowSectionModal] = useState(false);

	const closeSectionModal = () => {
		setShowSectionModal(false);
	};

	const [addLocation, setAddLocation] = useState(0);

	return (
		<Fragment>
			<Button variant="btn btn-az-primary btn-rounded btn-block" onClick={() => setShowSectionModal(true)}>
				Add Content
			</Button>

			<Modal show={showSectionModal} size="lg" dialogClassName="modal-75w" onHide={closeSectionModal}>
				<Modal.Header closeButton>
					<Modal.Title>Select a Section Template</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Sections addLocation={addLocation} closeModal={closeSectionModal} />
				</Modal.Body>
				<Modal.Footer>
					<Button variant="outline-light" onClick={closeSectionModal}>
						Cancel
					</Button>
				</Modal.Footer>
			</Modal>
		</Fragment>
	);

	// return (
	// 	<div className="toolbox-container z-index-100">
	// 		<div className="toolbox">
	// 			<Droppable droppableId="toolbox" isDropDisabled={true}>
	// 				{provided => (
	// 					<div className="az-icon-group bg-gray-200 mg-b-40" ref={provided.innerRef}>
	// 						<Draggable draggableId="add" index={1}>
	// 							{(provided, snapshot) => (
	// 								<Fragment>
	// 									<div className="toolbox-item bg-gray-300" {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} style={provided.draggableProps.style}>
	// 										<i className="fas fa-plus"></i>
	// 										<div>Add</div>
	// 									</div>
	// 									{snapshot.isDragging && (
	// 										<div className="dragging-static-copy toolbox-item bg-gray-300">
	// 											<i className="fas fa-plus"></i>
	// 											<div>Add</div>
	// 										</div>
	// 									)}
	// 								</Fragment>
	// 							)}
	// 						</Draggable>

	// 						{provided.placeholder}
	// 					</div>
	// 				)}
	// 			</Droppable>
	// 		</div>
	// 	</div>
	// );
};

export default Toolbox;
