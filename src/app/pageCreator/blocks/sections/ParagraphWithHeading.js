import React, { useContext } from "react";
import Input from "./blocks/Input";
import Paragraph from "./blocks/Paragraph";
import PageContext from "../../../context/page/pageContext";

const ParagraphWithHeading = ({ block, index }) => {
	const pageContext = useContext(PageContext);

	const { current, updateCurrent, error } = pageContext;

	const err = {
		heading: error?.[`content[${index}].heading`],
		subHeading: error?.[`content[${index}].subHeading`],
		body: error?.[`content[${index}].body`]
	};

	const handleOnChange = e => updateCurrent({ ...current, content: current.content.map(el => (el._id === block._id ? { ...block, [e.target.name]: e.target.value } : el)) });

	const paragraphOnChange = value => updateCurrent({ ...current, content: current.content.map(el => (el._id === block._id ? { ...block, body: value } : el)) });

	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-md-12">
					<Input label="Heading" name="heading" type="text" value={block.heading} error={err.heading} onChange={handleOnChange} />
					<Input label="SubHeading" name="subHeading" type="text" value={block.subHeading} error={err.subHeading} onChange={handleOnChange} />
					<Paragraph label="Body" name="body" value={block.body} error={err.body} onChange={paragraphOnChange} />
				</div>
			</div>
		</div>
	);
};

export default ParagraphWithHeading;
