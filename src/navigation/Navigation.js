import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import LinkContext from "../context/link/linkContext";

const Navigation = () => {
	const linkContext = useContext(LinkContext);

	const { links, getLinks, deleteLink, loading } = linkContext;

	useEffect(() => {
		getLinks();
		// eslint-disable-next-line
	}, []);

	const handleClick = (id, e) => {
		e.preventDefault();
		deleteLink(id);
	};

	return (
		<div>
			<Link to="/links/create">Create Link</Link>
			<br />
			{links !== null && !loading ? (
				links.map((link, key) => (
					<div key={key}>
						<Link to={`/links/${link.id}`}>{link.label}</Link>
						<button onClick={e => handleClick(link.id, e)}>Delete</button>
					</div>
				))
			) : (
				<p></p>
			)}
		</div>
	);
};

export default Navigation;
