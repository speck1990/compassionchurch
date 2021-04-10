import React, { useContext } from "react";
import Image from "./blocks/Image";
import Input from "./blocks/Input";
import PageContext from "../../../context/page/pageContext";

const OurPrograms = ({ block }) => {
	const pageContext = useContext(PageContext);

	const { current, updateCurrent } = pageContext;

	const handleOnChange = e => {
		updateCurrent({ ...current, content: current.content.map(el => (el._id === block._id ? { ...block, [e.target.name]: e.target.value } : el)) });
	};

	const onImageDelete = () => updateCurrent({ ...current, content: current.content.map(el => (el._id === block._id ? { ...block, imageUrl: null } : el)) });

	const onImageDrop = url => updateCurrent({ ...current, content: current.content.map(el => (el._id === block._id ? { ...block, imageUrl: url } : el)) });

	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-md-4">
					<Input label="Heading" name="heading1" type="text" value={block.heading1} error={null} onChange={handleOnChange} />
					<Input label="Paragraph" name="paragraph1" as="textarea" type="text" value={block.paragraph1} error={null} onChange={handleOnChange} />
				</div>
				<div className="col-md-4">
					<Input label="Heading" name="heading2" type="text" value={block.heading2} error={null} onChange={handleOnChange} />
					<Input label="Paragraph" name="paragraph2" as="textarea" type="text" value={block.paragraph2} error={null} onChange={handleOnChange} />
				</div>
				<div className="col-md-4">
					<Input label="Heading" name="heading3" type="text" value={block.heading3} error={null} onChange={handleOnChange} />
					<Input label="Paragraph" name="paragraph3" as="textarea" type="text" value={block.paragraph3} error={null} onChange={handleOnChange} />
				</div>
				<div className="col-md-4">
					<Input label="Heading" name="heading4" type="text" value={block.heading4} error={null} onChange={handleOnChange} />
					<Input label="Paragraph" name="paragraph4" as="textarea" type="text" value={block.paragraph4} error={null} onChange={handleOnChange} />
				</div>
				<div className="col-md-4">
					<Input label="Heading" name="heading5" type="text" value={block.heading5} error={null} onChange={handleOnChange} />
					<Input label="Paragraph" name="paragraph5" as="textarea" type="text" value={block.paragraph5} error={null} onChange={handleOnChange} />
				</div>
				<div className="col-md-4">
					<Input label="Heading" name="heading6" type="text" value={block.heading6} error={null} onChange={handleOnChange} />
					<Input label="Paragraph" name="paragraph6" as="textarea" type="text" value={block.paragraph6} error={null} onChange={handleOnChange} />
				</div>
			</div>
		</div>
	);
};

export default OurPrograms;
