import React, { useContext } from "react";
import Image from "./blocks/Image";
import Input from "./blocks/Input";
import PageContext from "../../../context/page/pageContext";

const OurPrograms = ({ block, index }) => {
	const pageContext = useContext(PageContext);

	const { current, updateCurrent, error } = pageContext;

	const err = {
		title: error?.[`content[${index}].title`],
		heading1: error?.[`content[${index}].heading1`],
		paragraph1: error?.[`content[${index}].paragraph1`],
		heading2: error?.[`content[${index}].heading2`],
		paragraph2: error?.[`content[${index}].paragraph2`],
		heading3: error?.[`content[${index}].heading3`],
		paragraph3: error?.[`content[${index}].paragraph3`],
		heading4: error?.[`content[${index}].heading4`],
		paragraph4: error?.[`content[${index}].paragraph4`],
		heading5: error?.[`content[${index}].heading5`],
		paragraph5: error?.[`content[${index}].paragraph5`],
		heading6: error?.[`content[${index}].heading6`],
		paragraphy: error?.[`content[${index}].paragraph6`]
	};

	const handleOnChange = e => {
		updateCurrent({ ...current, content: current.content.map(el => (el._id === block._id ? { ...block, [e.target.name]: e.target.value } : el)) });
	};

	const onImageDelete = () => updateCurrent({ ...current, content: current.content.map(el => (el._id === block._id ? { ...block, imageUrl: null } : el)) });

	const onImageDrop = url => updateCurrent({ ...current, content: current.content.map(el => (el._id === block._id ? { ...block, imageUrl: url } : el)) });

	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-md-12">
					<Input label="Title" name="title" type="text" value={block.title} error={err.title} onChange={handleOnChange} />
					<Input label="Subtitle" name="subTitle" type="text" value={block.subTitle} error={err.subTitle} onChange={handleOnChange} />
				</div>
				<div className="col-md-4">
					<Input label="Heading" name="heading1" type="text" value={block.heading1} error={err.heading1} onChange={handleOnChange} />
					<Input label="Paragraph" name="paragraph1" as="textarea" type="text" value={block.paragraph1} error={err.paragraph1} onChange={handleOnChange} />
				</div>
				<div className="col-md-4">
					<Input label="Heading" name="heading2" type="text" value={block.heading2} error={err.heading2} onChange={handleOnChange} />
					<Input label="Paragraph" name="paragraph2" as="textarea" type="text" value={block.paragraph2} error={err.paragraph2} onChange={handleOnChange} />
				</div>
				<div className="col-md-4">
					<Input label="Heading" name="heading3" type="text" value={block.heading3} error={err.heading3} onChange={handleOnChange} />
					<Input label="Paragraph" name="paragraph3" as="textarea" type="text" value={block.paragraph3} error={err.paragraph3} onChange={handleOnChange} />
				</div>
				<div className="col-md-4">
					<Input label="Heading" name="heading4" type="text" value={block.heading4} error={err.heading4} onChange={handleOnChange} />
					<Input label="Paragraph" name="paragraph4" as="textarea" type="text" value={block.paragraph4} error={err.paragraph4} onChange={handleOnChange} />
				</div>
				<div className="col-md-4">
					<Input label="Heading" name="heading5" type="text" value={block.heading5} error={err.heading5} onChange={handleOnChange} />
					<Input label="Paragraph" name="paragraph5" as="textarea" type="text" value={block.paragraph5} error={err.heading5} onChange={handleOnChange} />
				</div>
				<div className="col-md-4">
					<Input label="Heading" name="heading6" type="text" value={block.heading6} error={err.heading6} onChange={handleOnChange} />
					<Input label="Paragraph" name="paragraph6" as="textarea" type="text" value={block.paragraph6} error={err.heading6} onChange={handleOnChange} />
				</div>
			</div>
		</div>
	);
};

export default OurPrograms;
