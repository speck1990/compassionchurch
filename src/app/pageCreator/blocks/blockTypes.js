import Section from "./blocks/Section";
import Heading from "./blocks/Heading";
import Paragraph from "./blocks/Paragraph";
import Image from "./blocks/Image";
import Button from "./blocks/Button";
// import Column from "./blocks/Column";
import * as Yup from "yup";

const blockTypes = [
	{
		type: "section",
		component: Section,
		icon: "fas fa-puzzle-piece",
		validation: null,
		template: {
			content: []
		}
	},
	{
		type: "heading",
		component: Heading,
		icon: "fas fa-heading",
		validation: Yup.object({
			text: Yup.string().matches(/(?<=>)[^<>]+(?=<\/)/, "Required")
		}),
		template: {
			text: ""
		}
	},
	{
		type: "paragraph",
		component: Paragraph,
		icon: "fas fa-paragraph",
		validation: Yup.object({
			text: Yup.string().matches(/(?<=>)[^<>]+(?=<\/)/, "Required")
		}),
		template: {
			text: ""
		}
	},
	{
		type: "button",
		component: Button,
		icon: "typcn typcn-minus-outline",
		validation: Yup.object({
			label: Yup.string()
				.required("Required")
				.test("label", "Label already in use", function (value) {
					return true;
				}),
			buttonValue: Yup.string().required("Required")
		}),
		template: {
			buttonType: "page",
			buttonValue: "",
			label: "",
			newTab: false
		}
	},
	{
		type: "image",
		component: Image,
		icon: "far fa-image",
		template: {
			url: null
		}
	},
	{ type: "form", icon: "far fa-comments" }
	// {
	// 	type: "columns",
	// 	component: Columns,
	// 	icon: "fas fa-columns",
	// 	template: {
	// 		columns: [
	// 			{
	// 				id: 1,
	// 				blocks: [
	// 					{ id: 1, type: "paragraph", text: "<p>column 1, row 1</p>" },
	// 					{ id: 1, type: "paragraph", text: "<p>column 1, row 2</p>" }
	// 				]
	// 			},
	// 			{
	// 				id: 2,
	// 				blocks: [
	// 					{ id: 1, type: "paragraph", text: "<p>column 2, row 1</p>" },
	// 					{ id: 1, type: "paragraph", text: "<p>column 2, row 2</p>" }
	// 				]
	// 			}
	// 		]
	// 	}
	// }
];

export default blockTypes;
