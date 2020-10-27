import styled from "styled-components";

const primaryColor = "#29335c";
const secondaryColor = "#F3A712";
const whiteColor = "#fff";

export const Navbar = styled.div`
	display: grid;
	grid-template-columns: 300px auto 300px;
	padding: 15px;
	background-color: ${primaryColor};
	color: ${whiteColor};
	margin-bottom: 25px;
`;

export const Brand = styled.div`
	font-size: 1.5em;
	font-weight: bold;
`;

export const Nav = styled.div`
	display: grid;
	grid-template-columns: 100px 100px 100px;
`;

export const NavLink = styled.a`
	color: ${whiteColor};
	display: block;
	place-self: center;

	&:hover {
		background-color: ${secondaryColor};
	}
`;

export const AccountNav = styled.div`
	justify-self: right;
	align-self: center;
`;
