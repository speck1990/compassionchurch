import React from "react";
import Heading from "./Heading";
import Paragraph from "./Paragraph";

const BlockItems = {
	heading: Heading,
	paragraph: Paragraph
};

export default block => {
	if (typeof BlockItems[block.type] != "undefined") {
		return React.createElement(BlockItems[block.type], { block, key: block.id });
	}

	return React.createElement(() => <div>The component {block.type} has not been created yet.</div>, { key: block.id });
};
