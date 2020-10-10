import React, { Fragment } from "react";
import AddBlock from "./AddBlock";
import BlockItems from "./blocks/BlockItems";

const Blocks = ({ blocks }) => {
	return (
		<Fragment>
			{blocks.length === 0 ? (
				<p>No Blocks</p>
			) : (
				blocks.map((block, key) => (
					<div key={block.id}>
						{BlockItems(block)}
						<AddBlock position={key} />
					</div>
				))
			)}
		</Fragment>
	);
};

export default Blocks;
