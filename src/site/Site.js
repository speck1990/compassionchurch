import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const Site = () => {
	const { slug } = useParams();

	const [pageInfo, setPageInfo] = useState({});

	useEffect(() => {
		const fetchData = async () => {
			const { data } = await axios.get("/pages");
			setPageInfo(data.find(page => slug === page.slug));
			// console.log(data[0]);
		};
		fetchData();

		// eslint-disable-next-line
	}, []);
	console.log(pageInfo.content);
	const renderContent = block => {
		switch (block.type) {
			case "heading":
				return parse(block.text);
			case "paragraph":
				return parse(block.text);

			default:
				return <p>No Match</p>;
		}
	};

	return (
		<div className="container">
			<h1>{pageInfo.title}</h1>
			{pageInfo.content !== undefined && pageInfo.content.map(block => <div key={block.id}>{renderContent(block)}</div>)}
		</div>
	);
};

export default Site;
