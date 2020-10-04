import React, { useContext } from "react";
import AddElement from "./AddElement";
import PageContext from "../context/page/pageContext";
import PropTypes from "prop-types";

const Elements = ({ type, id }) => {
	const pageContext = useContext(PageContext);

	const { content } = pageContext;

	return (
		<div>
			<div>
				{id} - {type}
			</div>
			<br />
			<AddElement id={id} />
			<br />
		</div>
	);
};

Elements.prototype = {
	type: PropTypes.string
};

export default Elements;
