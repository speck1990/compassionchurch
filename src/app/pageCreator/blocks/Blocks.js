import React, { Fragment } from "react";
import { Droppable } from "react-beautiful-dnd";
import AddBlock from "./AddBlock";
import BlockItems from "./blocks/BlockItems";

const Blocks = ({ blocks, isVisible }) => {
	return (
		<Fragment>
			{blocks.length === 0 ? (
				<p></p>
			) : (
				<Droppable droppableId="blocks">
					{provided => (
						<div ref={provided.innerRef} {...provided.droppableProps}>
							{blocks.map((block, key) => (
								<div key={block.id}>
									{BlockItems(block, key)}
									<AddBlock location={key} />
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
