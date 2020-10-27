import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Brand, Nav, NavLink, AccountNav } from "../lib/styles.js";

const NavigationBar = () => {
	return (
		<Navbar>
			<Brand href="#home">Compassion Network</Brand>
			<Nav className="mr-auto">
				<NavLink as={Link} to="/">
					Home
				</NavLink>
				<NavLink as={Link} to="/pages">
					Pages
				</NavLink>
				<NavLink as={Link} to="/links">
					Navigation
				</NavLink>
			</Nav>
			<AccountNav>Welcome, Stephen Peck</AccountNav>
		</Navbar>
	);
};

export default NavigationBar;
