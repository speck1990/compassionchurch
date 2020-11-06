import React from "react";
import { Link, withRouter } from "react-router-dom";

const UtilitiesSidebar = () => {
	const isPathActive = path => {
		return props.location.pathname.startsWith(path);
	};

	return (
		<div>
			<div className="az-content-left az-content-left-components">
				<div className="component-item">
					<label>Helper / Utilities</label>
					<nav className="nav flex-column">
						<Link to="/utilities/background" className={isPathActive("/utilities/background") ? "nav-link active" : "nav-link"}>
							Background
						</Link>
						<Link to="/utilities/border" className={isPathActive("/utilities/border") ? "nav-link active" : "nav-link"}>
							Border
						</Link>
						<Link to="/utilities/display" className={isPathActive("/utilities/display") ? "nav-link active" : "nav-link"}>
							Display
						</Link>
						<Link to="/utilities/flex" className={isPathActive("/utilities/flex") ? "nav-link active" : "nav-link"}>
							Flex
						</Link>
						<Link to="/utilities/height" className={isPathActive("/utilities/height") ? "nav-link active" : "nav-link"}>
							Height
						</Link>
						<Link to="/utilities/margin" className={isPathActive("/utilities/margin") ? "nav-link active" : "nav-link"}>
							Margin
						</Link>
						<Link to="/utilities/padding" className={isPathActive("/utilities/padding") ? "nav-link active" : "nav-link"}>
							Padding
						</Link>
						<Link to="/utilities/position" className={isPathActive("/utilities/position") ? "nav-link active" : "nav-link"}>
							Position
						</Link>
						<Link to="/utilities/typography" className={isPathActive("/utilities/typography") ? "nav-link active" : "nav-link"}>
							Typography
						</Link>
						<Link to="/utilities/width" className={isPathActive("/utilities/width") ? "nav-link active" : "nav-link"}>
							Width
						</Link>
						<Link to="/utilities/extras" className={isPathActive("/utilities/extras") ? "nav-link active" : "nav-link"}>
							Extras
						</Link>
					</nav>
				</div>
				{/* component-item */}
			</div>
			{/* az-content-left */}
		</div>
	);
};

export default withRouter(UtilitiesSidebar);
