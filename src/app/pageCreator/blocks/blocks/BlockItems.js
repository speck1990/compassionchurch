import React from "react";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import Image from "./Image";
import Button from "./Button";

const BlockItems = {
	heading: Heading,
	paragraph: Paragraph,
	image: Image,
	button: Button
};

export default (block, index) => {
	if (typeof BlockItems[block.type] != "undefined") {
		return React.createElement(BlockItems[block.type], { block, index });
	}

	return React.createElement(() => <div>The component {block.type} has not been created yet.</div>, { key: index });
};
