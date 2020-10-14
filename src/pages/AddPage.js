import React, { useContext, useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import PageContext from "../context/page/pageContext";
import AddBlock from "../blocks/AddBlock";
import Blocks from "../blocks/Blocks";
import { useParams } from "react-router-dom";

const AddPage = props => {
	const { id } = useParams();
	const pageContext = useContext(PageContext);

	const { current, setCurrent, clearCurrent, updateCurrent, updatePage, addPage, loading } = pageContext;

	useEffect(() => {
		if (id !== null) {
			setCurrent(id);
		} else {
			setCurrent();
		}

		return () => {
			clearCurrent();
		};

		// eslint-disable-next-line
	}, []);

	const onTextChange = e => updateCurrent({ ...current, [e.target.name]: e.target.value });

	const handleOnClick = e => {
		e.preventDefault();
		if (id) {
			updatePage(current);
		} else {
			addPage(current);
		}

		props.history.push("/pages");
	};

	const onDragEnd = result => {
		console.log(result);
	};

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<div>
				{current !== null && !loading ? (
					<div>
						<h1>Add New Page</h1>
						<form onSubmit={handleOnClick}>
							<div>
								<label htmlFor="title">Title</label>
								<br />
								<input type="text" name="title" value={current.title} onChange={onTextChange} />
							</div>
							<div>
								<label htmlFor="subtitle">Subtitle</label>
								<br />
								<input type="text" name="subtitle" value={current.subtitle} onChange={onTextChange} />
							</div>
							<br />
							<AddBlock location="-1" />
							<Blocks blocks={current.content} />
							<button onClick={handleOnClick}>Save & Publish</button>
						</form>
					</div>
				) : (
					<p></p>
				)}
			</div>
		</DragDropContext>
	);
};

export default AddPage;
