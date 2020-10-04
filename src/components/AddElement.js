import React, { useContext } from "react";
import PageContext from "../context/page/pageContext";

const AddElement = ({ id }) => {
	const pageContext = useContext(PageContext);

	const { addElement } = pageContext;

	const elementTypes = [{ type: "heading" }, { type: "paragraph" }, { type: "image" }];

	const handleClick = (el, id, e) => {
		e.preventDefault();
		addElement(el.type, id);
	};

	return (
		<div>
			{elementTypes.map((el, key) => (
				<button key={key} onClick={e => handleClick(el, id, e)}>
					{el.type}
				</button>
			))}
		</div>
	);
};

export default AddElement;
