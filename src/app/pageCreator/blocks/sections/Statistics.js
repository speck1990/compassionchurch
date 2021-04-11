import React, { useContext } from "react";
import Image from "./blocks/Image";
import Input from "./blocks/Input";
import PageContext from "../../../context/page/pageContext";

const Statistics = ({ block }) => {
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
				<div className="col-md-12">
					<Image image={block.imageUrl} onDelete={onImageDelete} onDrop={onImageDrop} />
				</div>
				<div className="col-md-3">
					<Input label="Number" name="number1" type="text" value={block.number1} error={null} onChange={handleOnChange} />
					<Input label="Label" name="label1" type="text" value={block.label1} error={null} onChange={handleOnChange} />
				</div>
				<div className="col-md-3">
					<Input label="Number" name="number2" type="text" value={block.number2} error={null} onChange={handleOnChange} />
					<Input label="Label" name="label2" type="text" value={block.label2} error={null} onChange={handleOnChange} />
				</div>
				<div className="col-md-3">
					<Input label="Number" name="number3" type="text" value={block.number3} error={null} onChange={handleOnChange} />
					<Input label="Label" name="label3" type="text" value={block.label3} error={null} onChange={handleOnChange} />
				</div>
				<div className="col-md-3">
					<Input label="Number" name="number4" type="text" value={block.number4} error={null} onChange={handleOnChange} />
					<Input label="Label" name="label4" type="text" value={block.label4} error={null} onChange={handleOnChange} />
				</div>
			</div>
		</div>
	);
};

export default Statistics;
