import React, { useContext } from "react";
import PageContext from "../context/page/pageContext";
import AddBlock from "../blocks/AddBlock";
import Blocks from "../blocks/Blocks";

const AddPage = () => {
	const pageContext = useContext(PageContext);

	const { current, updateCurrent } = pageContext;

	const { title, subtitle, content } = current;

	const onTextChange = e => updateCurrent({ ...current, [e.target.name]: e.target.value });

	return (
		<div>
			<h1>Add New Page</h1>
			<form>
				<div>
					<label htmlFor="title">Title</label>
					<br />
					<input type="text" name="title" value={title} onChange={onTextChange} />
				</div>
				<div>
					<label htmlFor="subtitle">Subtitle</label>
					<br />
					<input type="text" name="subtitle" value={subtitle} onChange={onTextChange} />
				</div>
				<br />
				<AddBlock position="-1" />
				<Blocks blocks={content} />
				<button>Save & Publish</button>
			</form>
		</div>
	);
};

export default AddPage;
