import React, { useContext, Fragment } from "react";
import { Form } from "react-bootstrap";
import Dropzone from "../../../../shared/formElements/Dropzone";

const Image = ({ image, onDelete, onDrop, error, text }) => {
	return (
		<Fragment>
			<Dropzone onDrop={onDrop} onDelete={onDelete} image={image} className={error && "is-invalid dropzone-invalid"} />
			{error ? (
				<Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
			) : (
				<Form.Text className="text-muted" style={!text ? { marginBottom: "20px" } : {}}>
					{text}
				</Form.Text>
			)}
		</Fragment>
	);
};

export default Image;
