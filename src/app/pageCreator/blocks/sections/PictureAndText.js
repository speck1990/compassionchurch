import React, { useContext } from "react";
import Image from "./blocks/Image";
import Input from "./blocks/Input";
import Paragraph from "./blocks/Paragraph";
import PageContext from "../../../context/page/pageContext";

const PictureAndText = ({ block, index }) => {
	const pageContext = useContext(PageContext);

	const { current, updateCurrent, error } = pageContext;

	const err = {
		imageUrl: error?.[`content[${index}].imageUrl`],
		heading: error?.[`content[${index}].heading`],
		body: error?.[`content[${index}].body`]
	};

	const handleOnChange = e => updateCurrent({ ...current, content: current.content.map(el => (el._id === block._id ? { ...block, [e.target.name]: e.target.value } : el)) });

	const paragraphOnChange = value => updateCurrent({ ...current, content: current.content.map(el => (el._id === block._id ? { ...block, body: value } : el)) });

	const onImageDelete = () => updateCurrent({ ...current, content: current.content.map(el => (el._id === block._id ? { ...block, imageUrl: null } : el)) });

	const onImageDrop = url => updateCurrent({ ...current, content: current.content.map(el => (el._id === block._id ? { ...block, imageUrl: url } : el)) });

	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-md-6">
					<Image image={block.imageUrl} onDelete={onImageDelete} onDrop={onImageDrop} error={err.imageUrl} />
				</div>
				<div className="col-md-6">
					<Input label="Heading" name="heading" type="text" value={block.heading} error={err.heading} onChange={handleOnChange} />
					<Paragraph label="Body" name="body" value={block.body} error={err.body} onChange={paragraphOnChange} />
				</div>
			</div>
		</div>
	);
};

export default PictureAndText;
