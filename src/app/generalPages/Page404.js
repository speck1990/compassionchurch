import React from "react";
import { Link } from "react-router-dom";

const Page404 = () => {
	return (
		<div>
			<div className="az-error-wrapper">
				<h1>404</h1>
				<h2>Oopps. The page you were looking for doesn't exist.</h2>
				<h6>You may have mistyped the address or the page may have moved.</h6>
				<Link to="/" className="btn btn-outline-indigo">
					Back to Home
				</Link>
			</div>
		</div>
	);
};

export default Page404;
