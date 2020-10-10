import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import PageContext from "../context/page/pageContext";

const Pages = () => {
	const pageContext = useContext(PageContext);

	const { pages, getPages, setCurrent } = pageContext;

	useEffect(() => {
		getPages();
		// eslint-disable-next-line
	}, []);

	return (
		<div>
			{pages === null ? (
				<p>No Pages</p>
			) : (
				pages.map((page, key) => (
					<div key={key}>
						<Link to="/addpage" onClick={() => setCurrent(page)}>
							{page.title}
						</Link>
					</div>
				))
			)}
		</div>
	);
};

export default Pages;
