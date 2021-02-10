import React from "react";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import Image from "./Image";
import Button from "./Button";
import Columns from "./Columns";

const BlockItems = {
	heading: Heading,
	paragraph: Paragraph,
	image: Image,
	button: Button,
	columns: Columns
};

export default (block, index) => {
	if (typeof BlockItems[block.type] != "undefined") {
		return React.createElement(BlockItems[block.type], { block, index });
	}

	return React.createElement(() => <div>The component {block.type} has not been created yet.</div>, { key: index });
};
