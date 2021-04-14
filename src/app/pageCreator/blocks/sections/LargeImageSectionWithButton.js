import React, { useContext } from "react";
import Image from "./blocks/Image";
import Input from "./blocks/Input";
import PageContext from "../../../context/page/pageContext";

const LargeImageSectionWithButton = ({ block, index }) => {
	const pageContext = useContext(PageContext);

	const { current, updateCurrent, error } = pageContext;

	const err = {
		imageUrl: error?.[`content[${index}].imageUrl`],
		text: error?.[`content[${index}].text`],
		buttonLabel: error?.[`content[${index}].buttonLabel`],
		buttonLink: error?.[`content[${index}].buttonLink`]
	};

	const handleOnChange = e => {
		updateCurrent({ ...current, content: current.content.map(el => (el._id === block._id ? { ...block, [e.target.name]: e.target.value } : el)) });
	};

	const onImageDelete = () => updateCurrent({ ...current, content: current.content.map(el => (el._id === block._id ? { ...block, imageUrl: null } : el)) });

	const onImageDrop = url => updateCurrent({ ...current, content: current.content.map(el => (el._id === block._id ? { ...block, imageUrl: url } : el)) });

	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-md-6">
					<Image image={block.imageUrl} error={err.imageUrl} onDelete={onImageDelete} onDrop={onImageDrop} />
				</div>
				<div className="col-md-6">
					<Input label="Text" name="text" type="text" value={block.text} error={err.text} onChange={handleOnChange} />
					<Input label="Button Label" name="buttonLabel" type="text" value={block.buttonLabel} error={err.buttonLabel} onChange={handleOnChange} />
					<Input label="Button Link" name="buttonLink" type="text" value={block.buttonLink} error={err.buttonLink} text="(i.e. http://www.example.com)" onChange={handleOnChange} />
				</div>
			</div>
		</div>
	);
};

export default LargeImageSectionWithButton;
