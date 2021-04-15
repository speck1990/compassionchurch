import React, { useContext } from "react";
import Image from "./blocks/Image";
import Input from "./blocks/Input";
import PageContext from "../../../context/page/pageContext";

const Button = ({ block, index }) => {
	const pageContext = useContext(PageContext);

	const { current, updateCurrent, error } = pageContext;

	const err = {
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
					<Input label="Button Label" name="buttonLabel" type="text" value={block.buttonLabel} error={err.buttonLabel} onChange={handleOnChange} />
				</div>
				<div className="col-md-6">
					<Input label="Button Link" name="buttonLink" type="text" value={block.buttonLink} error={err.buttonLink} text="(i.e. http://www.example.com)" onChange={handleOnChange} />
				</div>
			</div>
		</div>
	);
};

export default Button;
