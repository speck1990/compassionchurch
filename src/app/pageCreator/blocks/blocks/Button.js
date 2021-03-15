import React, { useContext, useEffect } from "react";
import Select from "../../../shared/formElements/Select";
import Input from "../../../shared/formElements/Input";
import Checkbox from "../../../shared/formElements/Checkbox";
import Radio from "../../../shared/formElements/Radio";
import PageContext from "../../../context/page/pageContext";

const Button = ({ block, parent, index }) => {
	const pageContext = useContext(PageContext);

	const { current, updateCurrent, pages, getPages, error } = pageContext;

	const err = {
		label: error?.[`content[${parent.index}].content[${index}].label`],
		buttonValue: error?.[`content[${parent.index}].content[${index}].buttonValue`]
	};

	useEffect(() => {
		getPages();
		// eslint-disable-next-line
	}, []);

	const onChange = newBlock => {
		const parentSection = current.content.find(section => section._id === parent._id);
		const newBlocks = parentSection.content.map(bl => (bl._id === block._id ? newBlock : bl));
		parentSection.content = newBlocks;

		updateCurrent({ ...current, content: current.content.map(section => (section._id === parent._id ? parentSection : section)) });
	};

	const onTextChange = e => onChange({ ...block, [e.target.name]: e.target.value });
	const onLinkChange = e => onChange({ ...block, buttonValue: "", buttonType: e.target.value });
	const onSelectChange = e => onChange({ ...block, buttonValue: e.value });
	const onCheckboxChange = value => onChange({ ...block, newTab: !value });

	const options = [
		{ name: "page", value: "page", label: "Link to page" },
		{ name: "external", value: "external", label: "External link" }
	];

	return (
		<div className="pd-30 pd-sm-40 bg-gray-200 wd-xl-100p">
			<div className="row row-xs">
				<div className="col-md-6">
					<Input label="Button Label" name="label" type="text" value={block.label} error={err.label} onChange={onTextChange} />
					<Radio onChange={onLinkChange} label="Type" name={`buttonType-${parent._id}-${index}`} options={options} error={err.type} checkedValue={block.buttonType} />

					{block.buttonType === "page" ? (
						<Select
							defaultValue={pages.filter(page => page.slug === block.buttonValue).map(page => ({ value: page.slug, label: page.title }))}
							onChange={onSelectChange}
							name="buttonValue"
							label="Button"
							options={pages.map(page => ({ value: page.slug, label: page.title }))}
							error={err.buttonValue}
						/>
					) : (
						<Input label="Button" name="buttonValue" type="text" value={block.buttonValue} error={err.buttonValue} onChange={onTextChange} placeholder="http://www.example.com" />
					)}

					<Checkbox name={`newTab-${parent._id}-${index}`} label="Open in new tab" value={block.newTab} error={err.newTab} index={index} onCheckboxChange={onCheckboxChange} />
				</div>
			</div>
		</div>
	);
};

export default Button;
