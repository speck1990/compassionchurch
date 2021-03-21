import React, { useContext, Fragment } from "react";
import { Form } from "react-bootstrap";
import Dropzone from "../../../shared/formElements/Dropzone";
import PageContext from "../../../context/page/pageContext";

const Image = ({ block, parent, index, label, deleteButton = false }) => {
	const pageContext = useContext(PageContext);

	const { current, updateCurrent, error } = pageContext;

	const err = error?.[`content[${parent.index}].content[${index}].url`];

	const onImageDrop = url => {
		const updatedBlock = { _id: block._id, type: "image", url: url };

		const parentSection = current.content.find(section => section._id === parent._id);
		const newBlocks = parentSection.content.map(bl => (bl._id === block._id ? updatedBlock : bl));
		parentSection.content = newBlocks;

		updateCurrent({ ...current, content: current.content.map(section => (section._id === parent._id ? parentSection : section)) });
	};

	return (
		<Fragment>
			<Dropzone onDrop={onImageDrop} image={block.url} className={err && "is-invalid dropzone-invalid"} />
			<Form.Control.Feedback type="invalid">{err}</Form.Control.Feedback>
		</Fragment>
	);
};

export default Image;
