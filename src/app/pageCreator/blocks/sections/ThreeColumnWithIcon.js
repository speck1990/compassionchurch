import React, { useContext } from "react";
import Image from "./blocks/Image";
import Input from "./blocks/Input";
import Icon from "./blocks/Icon";
import PageContext from "../../../context/page/pageContext";

const ThreeColumnWithIcon = ({ block, index }) => {
	const pageContext = useContext(PageContext);

	const { current, updateCurrent, error } = pageContext;

	const err = {
		heading1: error?.[`content[${index}].heading1`],
		paragraph1: error?.[`content[${index}].paragraph1`],
		linkLabel1: error?.[`content[${index}].linkLabel1`],
		linkUrl1: error?.[`content[${index}].linkUrl1`],
		heading2: error?.[`content[${index}].heading2`],
		paragraph2: error?.[`content[${index}].paragraph2`],
		linkLabel2: error?.[`content[${index}].linkLabel2`],
		linkUrl2: error?.[`content[${index}].linkUrl2`],
		heading3: error?.[`content[${index}].heading3`],
		paragraph3: error?.[`content[${index}].paragraph3`],
		linkLabel3: error?.[`content[${index}].linkLabel3`],
		linkUrl3: error?.[`content[${index}].linkUrl3`]
	};

	const handleOnChange = e => {
		updateCurrent({ ...current, content: current.content.map(el => (el._id === block._id ? { ...block, [e.target.name]: e.target.value } : el)) });
	};

	const onIconChange = (name, value) => {
		console.log(name, value);
		updateCurrent({ ...current, content: current.content.map(el => (el._id === block._id ? { ...block, [name]: value } : el)) });
	};

	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-md-4">
					<Icon name="icon1" label="Icon" value={block.icon1} onChange={icon => onIconChange("icon1", icon)} />
					<Input label="Heading" name="heading1" type="text" value={block.heading1} error={err.heading1} onChange={handleOnChange} />
					<Input label="Paragraph 1" name="paragraph1" as="textarea" rows={4} type="text" value={block.paragraph1} error={err.paragraph1} onChange={handleOnChange} />
					<div className="row">
						<div className="col-md-6">
							<Input label="Link Label" name="linkLabel1" type="text" value={block.linkLabel1} error={err.linkLabel1} onChange={handleOnChange} />
						</div>
						<div className="col-md-6">
							<Input label="Link Url" name="linkUrl1" type="text" value={block.linkUrl1} text="(i.e. www.example.com)" error={err.linkUrl1} onChange={handleOnChange} />
						</div>
					</div>
				</div>
				<div className="col-md-4">
					<Icon name="icon2" label="Icon" value={block.icon2} onChange={icon => onIconChange("icon2", icon)} />
					<Input label="Heading" name="heading2" type="text" value={block.heading2} error={err.heading2} onChange={handleOnChange} />
					<Input label="Paragraph 1" name="paragraph2" as="textarea" rows={4} type="text" value={block.paragraph2} error={err.paragraph2} onChange={handleOnChange} />
					<div className="row">
						<div className="col-md-6">
							<Input label="Link Label" name="linkLabel2" type="text" value={block.linkLabel2} error={err.linkLabel2} onChange={handleOnChange} />
						</div>
						<div className="col-md-6">
							<Input label="Link Url" name="linkUrl2" type="text" value={block.linkUrl2} text="(i.e. www.example.com)" error={err.linkUrl2} onChange={handleOnChange} />
						</div>
					</div>
				</div>
				<div className="col-md-4">
					<Icon name="icon3" label="Icon" value={block.icon2} onChange={icon => onIconChange("icon3", icon)} />
					<Input label="Heading" name="heading3" type="text" value={block.heading3} error={err.heading3} onChange={handleOnChange} />
					<Input label="Paragraph 1" name="paragraph3" as="textarea" rows={4} type="text" value={block.paragraph3} error={err.paragraph3} onChange={handleOnChange} />
					<div className="row">
						<div className="col-md-6">
							<Input label="Link Label" name="linkLabel3" type="text" value={block.linkLabel3} error={err.linkLabel3} onChange={handleOnChange} />
						</div>
						<div className="col-md-6">
							<Input label="Link Url" name="linkUrl3" type="text" value={block.linkUrl3} text="(i.e. www.example.com)" error={err.linkUrl3} onChange={handleOnChange} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ThreeColumnWithIcon;
