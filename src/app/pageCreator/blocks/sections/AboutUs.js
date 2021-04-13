import React, { useContext } from "react";
import Image from "./blocks/Image";
import Input from "./blocks/Input";
import Paragraph from "./blocks/Paragraph";
import PageContext from "../../../context/page/pageContext";

const AboutUs = ({ block, index }) => {
	const pageContext = useContext(PageContext);

	const { current, updateCurrent, error } = pageContext;

	const err = {
		imageUrl: error?.[`content[${index}].imageUrl`],
		heading: error?.[`content[${index}].heading`],
		body: error?.[`content[${index}].body`],
		buttonLabel: error?.[`content[${index}].buttonLabel`],
		buttonLink: error?.[`content[${index}].buttonLink`]
	};

	const handleOnChange = e => updateCurrent({ ...current, content: current.content.map(el => (el._id === block._id ? { ...block, [e.target.name]: e.target.value } : el)) });

	const paragraphOnChange = value => updateCurrent({ ...current, content: current.content.map(el => (el._id === block._id ? { ...block, body: value } : el)) });

	const onImageDelete = () => updateCurrent({ ...current, content: current.content.map(el => (el._id === block._id ? { ...block, imageUrl: null } : el)) });

	const onImageDrop = url => updateCurrent({ ...current, content: current.content.map(el => (el._id === block._id ? { ...block, imageUrl: url } : el)) });

	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-md-12">
					<Input label="Title" name="title" type="text" value={block.title} error={err.title} onChange={handleOnChange} />
					<Input label="Subtitle" name="subTitle" type="text" value={block.subTitle} error={err.subTitle} onChange={handleOnChange} />
				</div>
				<div className="col-md-6">
					<Image image={block.imageUrl} onDelete={onImageDelete} onDrop={onImageDrop} error={err.imageUrl} />
				</div>
				<div className="col-md-6">
					<Input label="Heading" name="heading" type="text" value={block.heading} error={err.heading} onChange={handleOnChange} />
					<Paragraph label="Body" name="body" value={block.body} error={err.body} onChange={paragraphOnChange} />

					<div className="row">
						<div className="col-md-6">
							<Input label="Button Label" name="buttonLabel" type="text" value={block.buttonLabel} error={err.buttonLabel} onChange={handleOnChange} />
						</div>
						<div className="col-md-6">
							<Input label="Button Link" name="buttonLink" type="text" text="(i.e. http://www.example.com)" value={block.buttonLink} error={err.buttonLink} onChange={handleOnChange} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
