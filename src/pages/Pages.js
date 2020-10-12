import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import PageContext from "../context/page/pageContext";

const Pages = () => {
	const pageContext = useContext(PageContext);

	const { pages, getPages, loading } = pageContext;

	useEffect(() => {
		getPages();
		// eslint-disable-next-line
	}, []);

	return (
		<div>
			<Link to="/pages/create">Add Page</Link>
			<br />
			{pages !== null && !loading ? (
				pages.map((page, key) => (
					<div key={key}>
						<Link to={`/pages/${page.id}`}>{page.title}</Link>
					</div>
				))
			) : (
				<p></p>
			)}
		</div>
	);
};

export default Pages;
