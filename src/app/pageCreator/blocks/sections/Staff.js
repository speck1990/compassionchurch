import React, { useContext } from "react";
import Image from "./blocks/Image";
import Input from "./blocks/Input";
import PageContext from "../../../context/page/pageContext";

const Staff = ({ block }) => {
	const pageContext = useContext(PageContext);

	const { current, updateCurrent } = pageContext;

	const handleOnChange = e => {
		updateCurrent({ ...current, content: current.content.map(el => (el._id === block._id ? { ...block, [e.target.name]: e.target.value } : el)) });
	};

	const onImageDelete = () => updateCurrent({ ...current, content: current.content.map(el => (el._id === block._id ? { ...block, imageUrl: null } : el)) });

	const onImageDrop = url => updateCurrent({ ...current, content: current.content.map(el => (el._id === block._id ? { ...block, imageUrl: url } : el)) });

	return (
		<div className="container-fluid">
			{/* <div className="row">
				<div className="col-md-6">
					<Image image={block[0].imageUrl} onDelete={onImageDelete} onDrop={onImageDrop} />
					<Input label="Name" name="name" type="text" value={block[0].name} error={null} onChange={handleOnChange} />
					<Input label="Button Label" name="buttonLabel" type="text" value={block.buttonLabel} error={null} onChange={handleOnChange} />
					<Input label="Button Link" name="buttonLink" type="text" value={block.buttonLink} error={null} onChange={handleOnChange} />
				</div>
			</div> */}
		</div>
	);
};

export default Staff;
