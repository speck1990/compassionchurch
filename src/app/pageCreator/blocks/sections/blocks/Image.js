import React, { useContext, Fragment } from "react";
import { Form } from "react-bootstrap";
import Dropzone from "../../../../shared/formElements/Dropzone";

const Image = ({ image, onDelete, onDrop }) => {
	return <Dropzone onDrop={onDrop} onDelete={onDelete} image={image} />;
};

export default Image;
