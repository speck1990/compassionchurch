import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const SaveCancel = ({ onSave, redirect }) => {
	const history = useHistory();

	const [showModal, setShowModal] = useState(false);

	const closeModal = () => {
		setShowModal(false);
	};

	const handleSave = (onSave, e) => {
		e.preventDefault();
		onSave();
		history.push(redirect);
	};

	const handleCancel = () => {
		history.push(redirect);
	};

	return (
		<div className="wd-xl-50p">
			<button className="btn btn-az-primary pd-x-30 mg-r-5" onClick={e => handleSave(onSave, e)}>
				Save & Publish
			</button>
			<Button className="btn btn-dark pd-x-30" onClick={() => setShowModal(true)}>
				Cancel
			</Button>

			<Modal show={showModal} size="sm" onHide={() => closeModal("small")}>
				<Modal.Header closeButton>
					<Modal.Title>Cancel Changes?</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<p>Are you sure you would like to cancel all changes?</p>
				</Modal.Body>

				<Modal.Footer>
					<Button variant="danger" onClick={handleCancel}>
						Yes
					</Button>
					<Button variant="outline-light" onClick={closeModal}>
						No
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

export default SaveCancel;
