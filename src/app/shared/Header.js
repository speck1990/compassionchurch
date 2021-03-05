import React, { useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import logo from "../../assets/images/logo.png";
import user from "../../assets/images/img1.jpg";

const Header = props => {
	const closeMenu = e => {
		e.target.closest(".dropdown").classList.remove("show");
		e.target.closest(".dropdown .dropdown-menu").classList.remove("show");
	};

	const toggleHeaderMenu = e => {
		e.preventDefault();
		document.querySelector("body").classList.toggle("az-header-menu-show");
	};

	useEffect(() => {
		document.querySelector("body").classList.remove("az-header-menu-show");
	});

	const isPathActive = (path, matchExact = false) => {
		return matchExact ? props.location.pathname === path : props.location.pathname.startsWith(path);
	};

	return (
		<div>
			<div className="az-header">
				<div className="container">
					<div className="az-header-left">
						<a href="/" className="az-logo">
							<img alt="logo" src={logo} style={{ width: "200px" }} />
						</a>
						<a id="azMenuShow" onClick={event => toggleHeaderMenu(event)} className="az-header-menu-icon d-lg-none" href="/">
							<span></span>
						</a>
					</div>
					<div className="az-header-menu">
						<div className="az-header-menu-header">
							<Link to="/" className="az-logo">
								<img alt="logo" src={logo} style={{ width: "150px" }} />
							</Link>
							<a href="#/" onClick={event => toggleHeaderMenu(event)} className="close">
								&times;
							</a>
						</div>
						<ul className="nav">
							<li className={isPathActive("/", true) ? "nav-item active" : "nav-item"}>
								<Link to="/" className="nav-link">
									<i className="typcn typcn-chart-area-outline"></i> Dashboard
								</Link>
							</li>
							<li className={isPathActive("/pages") ? "nav-item active" : "nav-item"}>
								<Link to="/pages" className="nav-link">
									<i className="typcn typcn-document"></i> Pages
								</Link>
							</li>
							<li className={isPathActive("/links") ? "nav-item active" : "nav-item"}>
								<Link to="/links" className="nav-link">
									<i className="typcn typcn-location-arrow-outline"></i> Links
								</Link>
							</li>
							<li className={isPathActive("/settings", true) ? "nav-item active" : "nav-item"}>
								<Link to="/settings" className="nav-link">
									<i className="typcn typcn-spanner-outline"></i> Settings
								</Link>
							</li>
						</ul>
					</div>
					<div className="az-header-right">
						<Dropdown className="az-profile-menu">
							<Dropdown.Toggle as={"a"} className="az-img-user">
								<img src={user} alt="" />
							</Dropdown.Toggle>
							<Dropdown.Menu>
								<div className="az-dropdown-header d-sm-none">
									<a href="#/" onClick={event => closeMenu(event)} className="az-header-arrow">
										<i className="icon ion-md-arrow-back"></i>
									</a>
								</div>
								<div className="az-header-profile">
									<div className="az-img-user">
										<img src={user} alt="" />
									</div>
									<h6>Aziana Pechon</h6>
									<span>Premium Member</span>
								</div>

								<a href="#/" className="dropdown-item">
									<i className="typcn typcn-user-outline"></i> My Profile
								</a>
								<a href="#/" className="dropdown-item">
									<i className="typcn typcn-edit"></i> Edit Profile
								</a>
								<a href="#/" className="dropdown-item">
									<i className="typcn typcn-time"></i> Activity Logs
								</a>
								<a href="#/" className="dropdown-item">
									<i className="typcn typcn-cog-outline"></i> Account Settings
								</a>
								<Link to="/general-pages/signin" className="dropdown-item">
									<i className="typcn typcn-power-outline"></i> Sign Out
								</Link>
							</Dropdown.Menu>
						</Dropdown>
					</div>
				</div>
			</div>
		</div>
	);
};

export default withRouter(Header);
