import React, { useContext } from "react";
import Image from "./blocks/Image";
import ReactQuill from "react-quill";
import Input from "./blocks/Input";
import Body from "./blocks/Body";
import PageContext from "../../../context/page/pageContext";

let Quill = ReactQuill.Quill;

let BlockBlot = Quill.import("blots/block");

// class BoldBlot extends Inline {}
// BoldBlot.blotName = "bold";
// BoldBlot.tagName = "h1";
// BoldBlot.className = "custom-bold";

class HeaderBlot extends BlockBlot {
	static create(value) {
		let node = super.create();
		node.setAttribute("class", "title-post");
		return node;
	}
}

HeaderBlot.blotName = "header";
HeaderBlot.tagName = ["H2"];

// class HeaderBlot extends BlockBlot {}
// HeaderBlot.blotName = "header";
// HeaderBlot.tagName = "p";

Quill.register(HeaderBlot);

const AboutUs = ({ block, index }) => {
	const pageContext = useContext(PageContext);

	const { current, updateCurrent, error } = pageContext;

	const err = {
		body: error?.[`content[${index}].body`]
	};

	const paragraphOnChange = value => updateCurrent({ ...current, content: current.content.map(el => (el._id === block._id ? { ...block, body: value } : el)) });

	const onImageDelete = () => updateCurrent({ ...current, content: current.content.map(el => (el._id === block._id ? { ...block, imageUrl: null } : el)) });

	const onImageDrop = url => updateCurrent({ ...current, content: current.content.map(el => (el._id === block._id ? { ...block, imageUrl: url } : el)) });

	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-md-12">
					<Body label="Body" name="body" value={block.body} error={err.body} onChange={paragraphOnChange} />
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
