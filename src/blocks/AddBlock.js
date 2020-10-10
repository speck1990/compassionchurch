import React, { useContext } from "react";
import PageContext from "../context/page/pageContext";

const AddBlock = ({ position }) => {
	const pageContext = useContext(PageContext);

	const { addBlock } = pageContext;

	const blockTypes = ["heading", "paragraph", "image"];

	const handleClick = (type, position, e) => {
		e.preventDefault();
		addBlock(type, position);
	};

	return (
		<div>
			{blockTypes.map((type, key) => (
				<button key={key} onClick={e => handleClick(type, position, e)}>
					{type}
				</button>
			))}
		</div>
	);
};

export default AddBlock;
