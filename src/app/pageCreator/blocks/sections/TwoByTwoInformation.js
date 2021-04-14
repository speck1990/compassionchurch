import React, { useContext } from "react";
import Image from "./blocks/Image";
import Select from "./blocks/Select";
import Input from "./blocks/Input";
import PageContext from "../../../context/page/pageContext";

const TwoByTwoInformation = ({ block, index }) => {
	const pageContext = useContext(PageContext);

	const { current, updateCurrent, error } = pageContext;

	const err = {
		icon1: error?.[`content[${index}].icon1`],
		icon2: error?.[`content[${index}].icon2`],
		icon3: error?.[`content[${index}].icon3`],
		icon4: error?.[`content[${index}].icon4`],
		heading: error?.[`content[${index}].heading`],
		paragraph: error?.[`content[${index}].paragraph`],
		heading1: error?.[`content[${index}].heading1`],
		paragraph1: error?.[`content[${index}].paragraph1`],
		heading2: error?.[`content[${index}].heading2`],
		paragraph2: error?.[`content[${index}].paragraph2`],
		heading3: error?.[`content[${index}].heading3`],
		paragraph3: error?.[`content[${index}].paragraph4`],
		heading4: error?.[`content[${index}].heading4`],
		paragraph4: error?.[`content[${index}].paragraph4`],
		imageUrl: error?.[`content[${index}].imageUrl`]
	};

	const handleOnChange = e => {
		updateCurrent({ ...current, content: current.content.map(el => (el._id === block._id ? { ...block, [e.target.name]: e.target.value } : el)) });
	};

	const onImageDelete = () => updateCurrent({ ...current, content: current.content.map(el => (el._id === block._id ? { ...block, imageUrl: null } : el)) });

	const onImageDrop = url => updateCurrent({ ...current, content: current.content.map(el => (el._id === block._id ? { ...block, imageUrl: url } : el)) });

	const onSelectChange = (e, name) => updateCurrent({ ...current, content: current.content.map(el => (el._id === block._id ? { ...block, [name]: e.value } : el)) });

	const options = [
		{ value: "rocket", label: "Rocket" },
		{ value: "briefcase", label: "Briefcase" },
		{ value: "support", label: "Support" },
		{ value: "present", label: "Present" },
		{ value: "people", label: "People" },
		{ value: "pin", label: "Pin" },
		{ value: "user-follow", label: "User Follow" }
	];

	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-md-6">
					<Input label="Heading" name="heading" type="text" value={block.heading} error={err.heading} onChange={handleOnChange} />
					<Input label="Paragraph" name="paragraph" as="textarea" type="text" value={block.paragraph} error={err.paragraph} onChange={handleOnChange} />
					<div className="row">
						<div className="col-md-6">
							<Select defaultValue={options.filter(option => option.value === block.icon1)} onChange={e => onSelectChange(e, "icon1")} name="icon1" label="Icon" options={options} error={err.icon1} />
							<Input label="Heading" name="heading1" type="text" value={block.heading1} error={err.heading1} onChange={handleOnChange} />
							<Input label="Paragraph" name="paragraph1" as="textarea" type="text" value={block.paragraph1} error={err.paragraph1} onChange={handleOnChange} />
						</div>
						<div className="col-md-6">
							<Select defaultValue={options.filter(option => option.value === block.icon2)} onChange={e => onSelectChange(e, "icon2")} name="icon2" label="Icon" options={options} error={err.icon2} />
							<Input label="Heading" name="heading2" type="text" value={block.heading2} error={err.heading2} onChange={handleOnChange} />
							<Input label="Paragraph" name="paragraph2" as="textarea" type="text" value={block.paragraph2} error={err.paragraph2} onChange={handleOnChange} />
						</div>
						<div className="col-md-6">
							<Select defaultValue={options.filter(option => option.value === block.icon3)} onChange={e => onSelectChange(e, "icon3")} name="icon3" label="Icon" options={options} error={err.icon3} />
							<Input label="Heading" name="heading3" type="text" value={block.heading3} error={err.heading3} onChange={handleOnChange} />
							<Input label="Paragraph" name="paragraph3" as="textarea" type="text" value={block.paragraph3} error={err.paragraph3} onChange={handleOnChange} />
						</div>
						<div className="col-md-6">
							<Select defaultValue={options.filter(option => option.value === block.icon4)} onChange={e => onSelectChange(e, "icon4")} name="icon4" label="Icon" options={options} error={err.icon4} />
							<Input label="Heading" name="heading4" type="text" value={block.heading4} error={err.heading4} onChange={handleOnChange} />
							<Input label="Paragraph" name="paragraph4" as="textarea" type="text" value={block.paragraph4} error={err.paragraph4} onChange={handleOnChange} />
						</div>
					</div>
				</div>
				<div className="col-md-6">
					<Image image={block.imageUrl} onDelete={onImageDelete} error={err.imageUrl} onDrop={onImageDrop} />
				</div>
			</div>
		</div>
	);
};

export default TwoByTwoInformation;
