import React, { useState, Fragment } from "react";
import { Modal, Button } from "react-bootstrap";

const SaveCancel = ({ onSave, onCancel, showCancel = true }) => {
	const [showModal, setShowModal] = useState(false);

	const closeModal = () => {
		setShowModal(false);
	};

	const handleSave = (onSave, e) => {
		e.preventDefault();
		onSave();
	};

	return (
		<div className="wd-xl-50p">
			<button className="btn btn-az-primary pd-x-30 mg-r-5" onClick={e => handleSave(onSave, e)}>
				Save & Publish
			</button>

			{showCancel && (
				<Fragment>
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
							<Button variant="danger" onClick={onCancel}>
								Yes
							</Button>
							<Button variant="outline-light" onClick={closeModal}>
								No
							</Button>
						</Modal.Footer>
					</Modal>
				</Fragment>
			)}
		</div>
	);
};

export default SaveCancel;
