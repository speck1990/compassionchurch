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
import * as Yup from "yup";

import aboutUsImage from "./sections/images/about-us.png";
import threeColumnWithIcon from "./sections/images/three-column-with-icon.png";
import largeImageSectionWithButton from "./sections/images/large-image-section-with-button.png";
import statistics from "./sections/images/statistics.png";
import staff from "./sections/images/staff.png";
import ourPrograms from "./sections/images/our-programs.png";
import twoByTwoInformation from "./sections/images/two-by-two-information.png";

const blockTypes = [
	{
		type: "about-us",
		component: AboutUs,
		image: aboutUsImage,
		icon: "fas fa-puzzle-piece",
		validation: Yup.object().shape({
			heading: Yup.string().required("Required"),
			body: Yup.string().matches(/(?<=>)[^<>]+(?=<\/)/, "Required"),
			buttonLabel: Yup.string().required("Required"),
			buttonLink: Yup.string().url("Enter a valid url").required("Required"),
			imageUrl: Yup.string().nullable().required("Required")
		}),
		template: {
			imageUrl: null,
			heading: "",
			body: "",
			buttonLabel: "",
			buttonLink: ""
		}
	},
	{
		type: "three-column-with-icon",
		component: ThreeColumnWithIcon,
		image: threeColumnWithIcon,
		icon: "fas fa-puzzle-piece",
		validation: null,
		template: {
			title: "Three Column With Icon"
		}
	},
	{
		type: "large-image-section-with-button",
		component: LargeImageSectionWithButton,
		image: largeImageSectionWithButton,
		icon: "fas fa-puzzle-piece",
		validation: Yup.object().shape({ text: Yup.string().required("Required"), buttonLabel: Yup.string().required("Required"), buttonLink: Yup.string().url("Enter a valid url").required("Required") }),
		template: {
			text: "",
			buttonLabel: "",
			buttonLink: ""
		}
	},
	{
		type: "our-programs",
		component: OurPrograms,
		image: ourPrograms,
		icon: "fas fa-puzzle-piece",
		validation: null,
		template: {
			title: "Our Programs"
		}
	},
	{
		type: "staff",
		component: Staff,
		image: staff,
		icon: "fas fa-puzzle-piece",
		validation: null,
		template: {
			title: "Our Staff"
		}
	},
	{
		type: "statistics",
		component: Statistics,
		image: statistics,
		icon: "fas fa-puzzle-piece",
		validation: null,
		template: {
			title: "Statistics"
		}
	},
	{
		type: "two-by-two-information",
		component: TwoByTwoInformation,
		image: twoByTwoInformation,
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
