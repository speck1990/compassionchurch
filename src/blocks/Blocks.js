import React, { Fragment, useContext } from "react";
import { Droppable } from "react-beautiful-dnd";
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
				<Droppable droppableId="blocks">
					{provided => (
						<div ref={provided.innerRef} {...provided.droppableProps}>
							{blocks.map((block, key) => (
								<div key={block.id}>
									<button onClick={() => deleteBlock(block.id)}>Delete Below</button>
									{BlockItems(block, key)}
									<AddBlock position={key} />
								</div>
							))}
							{provided.placeholder}
						</div>
					)}
				</Droppable>
			)}
		</Fragment>
	);
};

export default Blocks;
