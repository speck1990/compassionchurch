import PageHeader from "./sections/PageHeader";
import AboutUs from "./sections/AboutUs";
import Button from "./sections/Button";
import Body from "./sections/Body";
import LargePageHeader from "./sections/LargePageHeader";
import PictureAndText from "./sections/PictureAndText";
import ParagraphWithHeading from "./sections/ParagraphWithHeading";
import ParagraphWithHeadingAndButton from "./sections/ParagraphWithHeadingAndButton";
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

import pageHeader from "./sections/images/pageHeader.png";
import aboutUsImage from "./sections/images/about-us.png";
import body from "./sections/images/body.png";
import pictureAndText from "./sections/images/pictureAndText.png";
import paragraphWithHeading from "./sections/images/paragraph-with-heading.png";
import paragraphWithHeadingAndButton from "./sections/images/paragraph-with-heading-and-button.png";
import threeColumnWithIcon from "./sections/images/three-column-with-icon.png";
import largeImageSectionWithButton from "./sections/images/large-image-section-with-button.png";
import largePageHeader from "./sections/images/largePageHeader.png";
import statistics from "./sections/images/statistics.png";
import button from "./sections/images/button.png";
import staff from "./sections/images/staff.png";
import ourPrograms from "./sections/images/our-programs.png";
import twoByTwoInformation from "./sections/images/two-by-two-information.png";
import Paragraph from "./sections/blocks/Paragraph";

const blockTypes = [
	{
		type: "pageHeader",
		component: PageHeader,
		image: pageHeader,
		icon: "fas fa-puzzle-piece",
		validation: Yup.object().shape({
			title: Yup.string().required("Required"),
			imageUrl: Yup.string().nullable().required("Required")
		}),
		template: {
			imageUrl: null,
			title: ""
		}
	},
	{
		type: "aboutUs",
		component: AboutUs,
		image: aboutUsImage,
		icon: "fas fa-puzzle-piece",
		validation: Yup.object().shape({
			title: Yup.string().required("Required"),
			subTitle: Yup.string().required("Required"),
			heading: Yup.string().required("Required"),
			body: Yup.string().matches(/(?<=>)[^<>]+(?=<\/)/, "Required"),
			buttonLabel: Yup.string().required("Required"),
			buttonLink: Yup.string().url("Enter a valid url").required("Required"),
			imageUrl: Yup.string().nullable().required("Required")
		}),
		template: {
			imageUrl: null,
			title: "",
			subTitle: "",
			heading: "",
			body: "",
			buttonLabel: "",
			buttonLink: ""
		}
	},
	{
		type: "paragraphWithHeading",
		component: ParagraphWithHeading,
		image: paragraphWithHeading,
		icon: "fas fa-puzzle-piece",
		validation: Yup.object().shape({
			heading: Yup.string().required("Required"),
			body: Yup.string().matches(/(?<=>)[^<>]+(?=<\/)/, "Required")
		}),
		template: {
			subHeading: "",
			heading: "",
			body: ""
		}
	},
	{
		type: "paragraphWithHeadingAndButton",
		component: ParagraphWithHeadingAndButton,
		image: paragraphWithHeadingAndButton,
		icon: "fas fa-puzzle-piece",
		validation: Yup.object().shape({
			heading: Yup.string().required("Required"),
			body: Yup.string().matches(/(?<=>)[^<>]+(?=<\/)/, "Required"),
			buttonLabel: Yup.string().required("Required"),
			buttonLink: Yup.string().url("Enter a valid url").required("Required")
		}),
		template: {
			subHeading: "",
			heading: "",
			body: ""
		}
	},
	{
		type: "button",
		component: Button,
		image: button,
		icon: "fas fa-puzzle-piece",
		validation: Yup.object().shape({
			buttonLabel: Yup.string().required("Required"),
			buttonLink: Yup.string().url("Enter a valid url").required("Required")
		}),
		template: {
			buttonLabel: "",
			buttonLink: ""
		}
	},
	{
		type: "largePageHeader",
		component: LargePageHeader,
		image: largePageHeader,
		icon: "fas fa-puzzle-piece",
		validation: Yup.object().shape({
			imageUrl: Yup.string().nullable().required("Required"),
			heading: Yup.string().required("Required"),
			buttonLabel: Yup.string().required("Required"),
			buttonLink: Yup.string().url("Enter a valid url").required("Required")
		}),
		template: {
			imageUrl: null,
			heading: "",
			buttonLabel: "",
			buttonLink: ""
		}
	},
	{
		type: "threeColumnWithIcon",
		component: ThreeColumnWithIcon,
		image: threeColumnWithIcon,
		icon: "fas fa-puzzle-piece",
		validation: Yup.object().shape({
			icon1: Yup.string().required("Required"),
			icon2: Yup.string().required("Required"),
			icon3: Yup.string().required("Required"),
			heading1: Yup.string().required("Required"),
			paragraph1: Yup.string().required("Required"),
			linkLabel1: Yup.string().required("Required"),
			linkUrl1: Yup.string().url("Enter a valid url").required("Required"),
			heading2: Yup.string().required("Required"),
			paragraph2: Yup.string().required("Required"),
			linkLabel2: Yup.string().required("Required"),
			linkUrl2: Yup.string().url("Enter a valid url").required("Required"),
			heading3: Yup.string().required("Required"),
			paragraph3: Yup.string().required("Required"),
			linkLabel3: Yup.string().required("Required"),
			linkUrl3: Yup.string().url("Enter a valid url").required("Required")
		}),
		template: {
			icon1: "",
			icon2: "",
			icon3: "",
			heading1: "",
			paragraph1: "",
			linkLabel1: "",
			linkUrl1: "",
			heading2: "",
			paragraph2: "",
			linkLabel2: "",
			linkUrl2: "",
			heading3: "",
			paragraph3: "",
			linkLabel3: "",
			linkUrl3: ""
		}
	},
	{
		type: "largeImageSectionWithButton",
		component: LargeImageSectionWithButton,
		image: largeImageSectionWithButton,
		icon: "fas fa-puzzle-piece",
		validation: Yup.object().shape({ imageUrl: Yup.string().nullable().required("Required"), text: Yup.string().required("Required"), buttonLabel: Yup.string().required("Required"), buttonLink: Yup.string().url("Enter a valid url").required("Required") }),
		template: {
			text: "",
			buttonLabel: "",
			buttonLink: ""
		}
	},
	{
		type: "ourPrograms",
		component: OurPrograms,
		image: ourPrograms,
		icon: "fas fa-puzzle-piece",
		validation: Yup.object().shape({
			title: Yup.string().required("Required"),
			heading1: Yup.string().required("Required"),
			paragraph1: Yup.string().required("Required"),
			heading2: Yup.string().required("Required"),
			paragraph2: Yup.string().required("Required"),
			heading3: Yup.string().required("Required"),
			paragraph3: Yup.string().required("Required"),
			heading4: Yup.string().required("Required"),
			paragraph4: Yup.string().required("Required"),
			heading5: Yup.string().required("Required"),
			paragraph5: Yup.string().required("Required"),
			heading6: Yup.string().required("Required"),
			paragraph6: Yup.string().required("Required")
		}),
		template: {
			title: "",
			subTitle: "",
			heading1: "",
			paragraph1: "",
			heading2: "",
			paragraph2: "",
			heading3: "",
			paragraph3: "",
			heading4: "",
			paragraph4: "",
			heading5: "",
			paragraph5: "",
			heading6: "",
			paragraph6: ""
		}
	},
	{
		type: "pictureAndText",
		component: PictureAndText,
		image: pictureAndText,
		icon: "fas fa-puzzle-piece",
		validation: Yup.object().shape({
			imageUrl: Yup.string().nullable().required("Required"),
			heading: Yup.string().required("Required"),
			body: Yup.string().matches(/(?<=>)[^<>]+(?=<\/)/, "Required")
		}),
		template: {
			imageUrl: null,
			heading: "",
			body: ""
		}
	},
	// {
	// 	type: "staff",
	// 	component: Staff,
	// 	image: staff,
	// 	icon: "fas fa-puzzle-piece",
	// 	validation: Yup.object().shape({ title: Yup.string() }),
	// 	template: {
	// 		title: "Our Staff"
	// 	}
	// },
	{
		type: "statistics",
		component: Statistics,
		image: statistics,
		icon: "fas fa-puzzle-piece",
		validation: Yup.object().shape({
			imageUrl: Yup.string().nullable().required("Required"),
			number1: Yup.string().required("Required"),
			label1: Yup.string().required("Required"),
			number2: Yup.string().required("Required"),
			label2: Yup.string().required("Required"),
			number3: Yup.string().required("Required"),
			label3: Yup.string().required("Required"),
			number4: Yup.string().required("Required"),
			label4: Yup.string().required("Required")
		}),
		template: {
			imageUrl: null,
			number1: "",
			label1: "",
			number2: "",
			label2: "",
			number3: "",
			label3: "",
			number4: "",
			label4: ""
		}
	},
	{
		type: "twoByTwoInformation",
		component: TwoByTwoInformation,
		image: twoByTwoInformation,
		icon: "fas fa-puzzle-piece",
		validation: Yup.object().shape({
			icon1: Yup.string().required("Required"),
			icon2: Yup.string().required("Required"),
			icon3: Yup.string().required("Required"),
			icon4: Yup.string().required("Required"),
			heading: Yup.string().required("Required"),
			paragraph: Yup.string().required("Required"),
			heading1: Yup.string().required("Required"),
			paragraph1: Yup.string().required("Required"),
			heading2: Yup.string().required("Required"),
			paragraph2: Yup.string().required("Required"),
			heading3: Yup.string().required("Required"),
			paragraph3: Yup.string().required("Required"),
			heading4: Yup.string().required("Required"),
			paragraph4: Yup.string().required("Required"),
			imageUrl: Yup.string().nullable().required("Required")
		}),
		template: {
			icon1: "",
			icon2: "",
			icon3: "",
			icon4: "",
			heading: "",
			paragraph: "",
			heading1: "",
			paragraph1: "",
			heading2: "",
			paragraph2: "",
			heading3: "",
			paragraph3: "",
			heading4: "",
			paragraph4: "",
			imageUrl: null
		}
	},
	{
		type: "body",
		component: Body,
		image: body,
		icon: "fas fa-puzzle-piece",
		validation: Yup.object().shape({ body: Yup.string().matches(/(?<=>)[^<>]+(?=<\/)/, "Required") }),
		template: {
			body: ""
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
