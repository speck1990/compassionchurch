import React, { useContext } from "react";
import PageContext from "../context/page/pageContext";

const AddBlock = ({ location }) => {
	const pageContext = useContext(PageContext);

	const { addBlock } = pageContext;

	const blockTypes = ["heading", "paragraph", "image"];

	const handleClick = (type, location, e) => {
		e.preventDefault();
		const position = location + 1;
		addBlock({ type, text: "" }, position);
	};

	return (
		<div>
			{blockTypes.map((type, key) => (
				<button key={key} onClick={e => handleClick(type, location, e)}>
					{type}
				</button>
			))}
		</div>
	);
};

export default AddBlock;
