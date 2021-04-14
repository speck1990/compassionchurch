import React, { useContext } from "react";
import Image from "./blocks/Image";
import Input from "./blocks/Input";
import PageContext from "../../../context/page/pageContext";

const Statistics = ({ block, index }) => {
	const pageContext = useContext(PageContext);

	const { current, updateCurrent, error } = pageContext;

	const err = {
		imageUrl: error?.[`content[${index}].imageUrl`],
		number1: error?.[`content[${index}].number1`],
		label1: error?.[`content[${index}].label1`],
		number2: error?.[`content[${index}].number2`],
		label2: error?.[`content[${index}].label2`],
		number3: error?.[`content[${index}].number3`],
		label3: error?.[`content[${index}].label3`],
		number4: error?.[`content[${index}].number4`],
		label4: error?.[`content[${index}].label4`]
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
					<Image image={block.imageUrl} error={err.imageUrl} onDelete={onImageDelete} onDrop={onImageDrop} />
				</div>
				<div className="col-md-3">
					<Input label="Number" name="number1" type="text" value={block.number1} error={err.number1} onChange={handleOnChange} />
					<Input label="Label" name="label1" type="text" value={block.label1} error={err.label1} onChange={handleOnChange} />
				</div>
				<div className="col-md-3">
					<Input label="Number" name="number2" type="text" value={block.number2} error={err.number2} onChange={handleOnChange} />
					<Input label="Label" name="label2" type="text" value={block.label2} error={err.label2} onChange={handleOnChange} />
				</div>
				<div className="col-md-3">
					<Input label="Number" name="number3" type="text" value={block.number3} error={err.number3} onChange={handleOnChange} />
					<Input label="Label" name="label3" type="text" value={block.label3} error={err.label3} onChange={handleOnChange} />
				</div>
				<div className="col-md-3">
					<Input label="Number" name="number4" type="text" value={block.number4} error={err.number4} onChange={handleOnChange} />
					<Input label="Label" name="label4" type="text" value={block.label4} error={err.label4} onChange={handleOnChange} />
				</div>
			</div>
		</div>
	);
};

export default Statistics;
