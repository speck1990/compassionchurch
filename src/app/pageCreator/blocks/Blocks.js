import React, { Fragment, useContext } from "react";
import { Draggable } from "react-beautiful-dnd";
import { Button } from "react-bootstrap";
import PageContext from "../../context/page/pageContext";
import blockTypes from "./blockTypes";

const Blocks = ({ blocks }) => {
	const pageContext = useContext(PageContext);
	const { deleteBlock } = pageContext;

	const createBlock = (block, key) => {
		const { component } = blockTypes.find(blockType => blockType.type === block.type && blockType);

		if (typeof component == "undefined") {
			return (
				<Fragment>
					{React.createElement(() => (
						<div>This option is not available.</div>
					))}
				</Fragment>
			);
		}

		return React.createElement(component, { block, index: key });
	};

	return (
		<Fragment>
			{blocks.map((block, key) => (
				<div key={block._id}>
					<Draggable draggableId={block._id} index={key}>
						{provided => (
							<div {...provided.draggableProps} ref={provided.innerRef} className="bg-white mg-b-30 block-item-wrapper">
								<div className="block-item">
									<div className="btn-icon-list block-options">
										<div {...provided.dragHandleProps}>
											<i className="fas fa-arrows-alt"></i>
										</div>

										<Button variant="btn-icon" onClick={() => deleteBlock(block._id)}>
											<i className="fas fa-times"></i>
										</Button>
									</div>
									{createBlock(block, key)}
								</div>
							</div>
						)}
					</Draggable>
				</div>
			))}
		</Fragment>
	);
};
export default Blocks;
