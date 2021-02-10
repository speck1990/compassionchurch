import React, { useContext, useEffect } from "react";
import Select from "../../../shared/formElements/Select";
import Input from "../../../shared/formElements/Input";
import Checkbox from "../../../shared/formElements/Checkbox";
import Radio from "../../../shared/formElements/Radio";
import PageContext from "../../../context/page/pageContext";

const Button = ({ block, index }) => {
	const pageContext = useContext(PageContext);

	const { current, updateCurrent, pages, getPages } = pageContext;

	useEffect(() => {
		getPages();
		// eslint-disable-next-line
	}, []);

	const onTextChange = e => updateCurrent({ ...current, content: current.content.map(el => (el._id === block._id ? { ...block, [e.target.name]: e.target.value } : el)) });
	const onLinkChange = e => updateCurrent({ ...current, content: current.content.map(el => (el._id === block._id ? { ...block, buttonValue: "", buttonType: e.target.value } : el)) });
	const onSelectChange = e => updateCurrent({ ...current, content: current.content.map(el => (el._id === block._id ? { ...block, buttonValue: e.value } : el)) });
	const onCheckboxChange = (value, e) => updateCurrent({ ...current, content: current.content.map(el => (el._id === block._id ? { ...block, newTab: !value } : el)) });

	const options = [
		{ name: "page", value: "page", label: "Link to page" },
		{ name: "external", value: "external", label: "External link" }
	];

	return (
		<div className="pd-30 pd-sm-40 bg-gray-200 wd-xl-100p">
			<div className="row row-xs">
				<div className="col-md-6">
					<Input label="Button Label" name="label" type="text" value={block.label} onChange={onTextChange} />
					<Radio onChange={onLinkChange} label="Type" name={`buttonType-${index}`} options={options} checkedValue={block.buttonType} />

					{block.buttonType === "page" ? (
						<Select defaultValue={pages.filter(page => page.slug === block.buttonValue).map(page => ({ value: page.slug, label: page.title }))} onChange={onSelectChange} name="buttonLabel" label="Button" options={pages.map(page => ({ value: page.slug, label: page.title }))} />
					) : (
						<Input label="Button" name="buttonValue" type="text" value={block.buttonValue} onChange={onTextChange} placeholder="http://www.example.com" />
					)}

					<Checkbox name={`newTab-${index}`} label="Open in new tab" value={block.newTab} index={index} onCheckboxChange={onCheckboxChange} />
				</div>
			</div>
		</div>
	);
};

export default Button;
