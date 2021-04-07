import AboutUs from "./sections/AboutUs";
import ThreeColumnWithIcon from "./sections/ThreeColumnWithIcon";
import LargeImageSectionWithButton from "./sections/LargeImageSectionWithButton";
import TwoByTwoInformation from "./sections/TwoByTwoInformation";
import OurPrograms from "./sections/OurPrograms";
import Staff from "./sections/Staff";
import Statistics from "./sections/Statistics";
// import Section from "./blocks/Section";
// import Heading from "./blocks/Heading";
// import Paragraph from "./blocks/Paragraph";
// import Image from "./blocks/Image";
// import Button from "./blocks/Button";
// import * as Yup from "yup";

const blockTypes = [
	{
		type: "about-us",
		component: AboutUs,
		icon: "fas fa-puzzle-piece",
		validation: null,
		template: {
			imageUrl: null,
			heading: ""
		}
	},
	{
		type: "three-column-with-icon",
		component: ThreeColumnWithIcon,
		icon: "fas fa-puzzle-piece",
		validation: null,
		template: {
			title: "Three Column With Icon"
		}
	},
	{
		type: "large-image-section-with-button",
		component: LargeImageSectionWithButton,
		icon: "fas fa-puzzle-piece",
		validation: null,
		template: {
			title: "Large Image Section With Button"
		}
	},
	{
		type: "our-programs",
		component: OurPrograms,
		icon: "fas fa-puzzle-piece",
		validation: null,
		template: {
			title: "Our Programs"
		}
	},
	{
		type: "staff",
		component: Staff,
		icon: "fas fa-puzzle-piece",
		validation: null,
		template: {
			title: "Our Staff"
		}
	},
	{
		type: "statistics",
		component: Statistics,
		icon: "fas fa-puzzle-piece",
		validation: null,
		template: {
			title: "Statistics"
		}
	},
	{
		type: "two-by-two-information",
		component: TwoByTwoInformation,
		icon: "fas fa-puzzle-piece",
		validation: null,
		template: {
			title: "two by two information"
		}
	}
	// {
	// 	type: "section",
	// 	component: Section,
	// 	icon: "fas fa-puzzle-piece",
	// 	validation: null,
	// 	template: {
	// 		content: []
	// 	}
	// },
	// {
	// 	type: "heading",
	// 	component: Heading,
	// 	icon: "fas fa-heading",
	// 	validation: Yup.object({
	// 		text: Yup.string().matches(/(?<=>)[^<>]+(?=<\/)/, "Required")
	// 	}),
	// 	template: {
	// 		text: ""
	// 	}
	// },
	// {
	// 	type: "paragraph",
	// 	component: Paragraph,
	// 	icon: "fas fa-paragraph",
	// 	validation: Yup.object({
	// 		text: Yup.string().matches(/(?<=>)[^<>]+(?=<\/)/, "Required")
	// 	}),
	// 	template: {
	// 		text: ""
	// 	}
	// },
	// {
	// 	type: "button",
	// 	component: Button,
	// 	icon: "typcn typcn-minus-outline",
	// 	validation: Yup.object({
	// 		label: Yup.string()
	// 			.required("Required")
	// 			.test("label", "Label already in use", function (value) {
	// 				return true;
	// 			}),
	// 		buttonValue: Yup.string().required("Required")
	// 	}),
	// 	template: {
	// 		buttonType: "page",
	// 		buttonValue: "",
	// 		label: "",
	// 		newTab: false
	// 	}
	// },
	// {
	// 	type: "image",
	// 	component: Image,
	// 	icon: "far fa-image",
	// 	template: {
	// 		url: null
	// 	}
	// },
	// { type: "form", icon: "far fa-comments" }
];

export default blockTypes;
