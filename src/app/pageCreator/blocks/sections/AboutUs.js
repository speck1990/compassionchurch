import React, { useContext, useState } from "react";
import Image from "./blocks/Image";
import Input from "./blocks/Input";
import PageContext from "../../../context/page/pageContext";

const AboutUs = ({ block }) => {
	const pageContext = useContext(PageContext);

	const { current, updateCurrent } = pageContext;

	const { data, setData } = useState(block);

	const handleOnChange = e => {
		setData({
			...data
		});
		updateCurrent({ ...current, content: current.content.map(el => (el._id === block._id ? { _id: block._id, type: "about-us", heading: e.target.value } : el)) });
	};

	const onDelete = () => {
		console.log("delete");
	};

	const onDrop = () => {
		console.log("drop");
	};

	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-md-6">
					<Image image={block.imageUrl} onDelete={onDelete} onDrop={onDrop} />
				</div>
				<div className="col-md-6">
					<Input label="Heading" name="heading" type="text" value={block.heading} error={null} onChange={handleOnChange} />
					<Input label="Paragraph 1" name="paragraph1" as="textarea" type="text" value={block.paragraph1} error={null} onChange={onChange} />
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
