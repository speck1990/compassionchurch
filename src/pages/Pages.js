import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import PageContext from "../context/page/pageContext";

const Pages = () => {
	const pageContext = useContext(PageContext);

	const { pages, getPages, deletePage, loading } = pageContext;

	useEffect(() => {
		getPages();
		// eslint-disable-next-line
	}, []);

	const handleClick = (id, e) => {
		e.preventDefault();
		deletePage(id);
	};

	return (
		<div>
			<Link to="/pages/create">Add Page</Link>
			<br />
			{pages !== null && !loading ? (
				pages.map((page, key) => (
					<div key={key}>
						<Link to={`/pages/${page.id}`}>{page.title}</Link>
						<button onClick={e => handleClick(page.id, e)}>Delete</button>
					</div>
				))
			) : (
				<p></p>
			)}
		</div>
	);
};

export default Pages;
