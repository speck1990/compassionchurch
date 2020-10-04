import React, { useContext } from "react";
import AddElement from "../components/AddElement";
import Elements from "../components/Elements";
import PageContext from "../context/page/pageContext";

const PageBuilder = () => {
	const pageContext = useContext(PageContext);

	const { content } = pageContext;

	return (
		<div>
			<AddElement id="-1" />
			<br />
			{content.map((element, key) => (
				<Elements key={key} type={element.type} id={key} />
			))}
		</div>
	);
};

export default PageBuilder;
