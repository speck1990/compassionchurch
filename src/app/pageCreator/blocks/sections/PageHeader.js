import React, { useContext } from "react";
import Image from "./blocks/Image";
import Input from "./blocks/Input";
import PageContext from "../../../context/page/pageContext";

const PageHeader = ({ block, index }) => {
	const pageContext = useContext(PageContext);

	const { current, updateCurrent, error } = pageContext;

	const err = {
		imageUrl: error?.[`content[${index}].imageUrl`],
		title: error?.[`content[${index}].title`]
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
					<Image image={block.imageUrl} onDelete={onImageDelete} error={err.imageUrl} onDrop={onImageDrop} />
				</div>
				<div className="col-md-12">
					<Input label="Title" name="title" type="text" value={block.title} error={err.title} onChange={handleOnChange} />
				</div>
			</div>
		</div>
	);
};

export default PageHeader;
