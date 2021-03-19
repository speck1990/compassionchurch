import React, { useContext } from "react";
import Dropzone from "../../../shared/formElements/Dropzone";
import PageContext from "../../../context/page/pageContext";

const Image = ({ block, parent, index, label, deleteButton = false }) => {
	const pageContext = useContext(PageContext);

	const { current, updateCurrent } = pageContext;

	const onImageDrop = url => {
		const updatedBlock = { _id: block._id, type: "image", url: url };

		const parentSection = current.content.find(section => section._id === parent._id);
		const newBlocks = parentSection.content.map(bl => (bl._id === block._id ? updatedBlock : bl));
		parentSection.content = newBlocks;

		updateCurrent({ ...current, content: current.content.map(section => (section._id === parent._id ? parentSection : section)) });
	};

	return <Dropzone onDrop={onImageDrop} image={block.url} />;
};

export default Image;
