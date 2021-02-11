import Heading from "./blocks/Heading";
import Paragraph from "./blocks/Paragraph";
import Image from "./blocks/Image";
import Button from "./blocks/Button";
import Columns from "./blocks/Columns";

const blockTypes = [
	{
		type: "heading",
		component: Heading,
		icon: "fas fa-heading",
		template: {
			text: ""
		}
	},
	{
		type: "paragraph",
		component: Paragraph,
		icon: "fas fa-paragraph",
		template: {
			text: ""
		}
	},
	{
		type: "button",
		component: Button,
		icon: "typcn typcn-minus-outline",
		template: {
			buttonType: "page",
			buttonValue: "",
			label: "",
			newTab: false
		}
	},
	{ type: "image", component: Image, icon: "far fa-image" },
	{ type: "form", icon: "far fa-comments" },
	{
		type: "columns",
		component: Columns,
		icon: "fas fa-columns",
		template: {
			columns: [
				{
					id: 1,
					blocks: [
						{ id: 1, type: "paragraph", text: "<p>column 1, row 1</p>" },
						{ id: 1, type: "paragraph", text: "<p>column 1, row 2</p>" }
					]
				},
				{
					id: 2,
					blocks: [
						{ id: 1, type: "paragraph", text: "<p>column 2, row 1</p>" },
						{ id: 1, type: "paragraph", text: "<p>column 2, row 2</p>" }
					]
				}
			]
		}
	}
];

export default blockTypes;
