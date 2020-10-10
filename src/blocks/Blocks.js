import React, { Fragment, useContext } from "react";
import AddBlock from "./AddBlock";
import BlockItems from "./blocks/BlockItems";
import PageContext from "../context/page/pageContext";

const Blocks = ({ blocks }) => {
	const pageContext = useContext(PageContext);

	const { deleteBlock } = pageContext;

	return (
		<Fragment>
			{blocks.length === 0 ? (
				<p>No Blocks</p>
			) : (
				blocks.map((block, key) => (
					<div key={block.id}>
						<button onClick={() => deleteBlock(block.id)}>Delete Below</button>
						{BlockItems(block)}
						<AddBlock position={key} />
					</div>
				))
			)}
		</Fragment>
	);
};

export default Blocks;
