import React, { useContext } from "react";
import Dropzone from "../../../shared/formElements/Dropzone";
import PageContext from "../../../context/page/pageContext";

const Image = ({ block, index, label, deleteButton = false }) => {
	const pageContext = useContext(PageContext);

	const { current, updateCurrent } = pageContext;

	const onImageDrop = url => updateCurrent({ ...current, content: current.content.map(el => (el._id === block._id ? { _id: block._id, type: "image", url } : el)) });

	return <Dropzone onDrop={onImageDrop} image={block.url} />;
};

export default Image;
