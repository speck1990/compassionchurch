import React, { useState, useContext } from "react";
import PageContext from "../context/page/pageContext";
import PageBuilder from "./PageBuilder.js";

const AddPage = () => {
	const pageContext = useContext(PageContext);

	const [pageInfo, setPageInfo] = useState({
		title: pageContext.title,
		subtitle: pageContext.subtitle,
		content: pageContext.content
	});

	const { title, subtitle } = pageInfo;

	const onTextChange = e => setPageInfo({ ...pageInfo, [e.target.name]: e.target.value });

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
				<PageBuilder />
				<button>Save & Publish</button>
			</form>
		</div>
	);
};

export default AddPage;
