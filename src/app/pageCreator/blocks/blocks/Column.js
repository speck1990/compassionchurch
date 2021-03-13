import React, { Fragment } from "react";
import { Droppable } from "react-beautiful-dnd";
import Blocks from "../Blocks";

const Column = ({ block, isDropDisabled, index }) => {
	const parent = {
		...block,
		index
	};

	const { columns } = block;

	return (
		<div className="row">
			{columns.map(column => (
				<div style={{ backgroundColor: "#ededed", padding: "10px 10px 10px 10px" }} className="col-md-6" key={column._id}>
					<Droppable droppableId={column._id} isDropDisabled={isDropDisabled}>
						{(provided, snapshot) => (
							<Fragment>
								<h3>Column {column._id}</h3>
								<div ref={provided.innerRef} {...provided.droppableProps}>
									{column.content.length === 0 ? (
										<div
											className="no-blocks bg-gray-100"
											style={{
												background: snapshot.isDraggingOver && "lightblue"
											}}
										>
											<p>Drag and drop content block here. {column._id}</p>
										</div>
									) : (
										<div>
											content
											{/* <Blocks blocks={column.content} parent={parent} /> */}
										</div>
									)}
									{provided.placeholder}
								</div>
							</Fragment>
						)}
					</Droppable>
				</div>
			))}
		</div>
	);
};

export default Column;
