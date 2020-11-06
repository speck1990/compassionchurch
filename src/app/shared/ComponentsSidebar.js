import React from "react";
import { Link, withRouter } from "react-router-dom";

const ComponentsSidebar = props => {
	const isPathActive = path => {
		return props.location.pathname.startsWith(path);
	};

	return (
		<div>
			<div className="az-content-left az-content-left-components">
				<div className="component-item">
					<label>UI Elements</label>
					<nav className="nav flex-column">
						<Link to="/ui-elements/accordions" className={isPathActive("/ui-elements/accordions") ? "nav-link active" : "nav-link"}>
							Accordion
						</Link>
						<Link to="/ui-elements/alerts" className={isPathActive("/ui-elements/alerts") ? "nav-link active" : "nav-link"}>
							Alerts
						</Link>
						<Link to="/ui-elements/avatar" className={isPathActive("/ui-elements/avatar") ? "nav-link active" : "nav-link"}>
							Avatar
						</Link>
						<Link to="/ui-elements/badges" className={isPathActive("/ui-elements/badges") ? "nav-link active" : "nav-link"}>
							Badge
						</Link>
						<Link to="/ui-elements/breadcrumbs" className={isPathActive("/ui-elements/breadcrumbs") ? "nav-link active" : "nav-link"}>
							Breadcrumbs
						</Link>
						<Link to="/ui-elements/buttons" className={isPathActive("/ui-elements/buttons") ? "nav-link active" : "nav-link"}>
							Buttons
						</Link>
						<Link to="/ui-elements/cards" className={isPathActive("/ui-elements/cards") ? "nav-link active" : "nav-link"}>
							Cards
						</Link>
						<Link to="/ui-elements/carousel" className={isPathActive("/ui-elements/carousel") ? "nav-link active" : "nav-link"}>
							Carousel
						</Link>
						<Link to="/ui-elements/collapse" className={isPathActive("/ui-elements/collapse") ? "nav-link active" : "nav-link"}>
							Collapse
						</Link>
						<Link to="/ui-elements/dropdowns" className={isPathActive("/ui-elements/dropdowns") ? "nav-link active" : "nav-link"}>
							Dropdown
						</Link>
						<Link to="/ui-elements/icons" className={isPathActive("/ui-elements/icons") ? "nav-link active" : "nav-link"}>
							Icons
						</Link>
						<Link to="/ui-elements/images" className={isPathActive("/ui-elements/images") ? "nav-link active" : "nav-link"}>
							Images
						</Link>
						<Link to="/ui-elements/list-group" className={isPathActive("/ui-elements/list-group") ? "nav-link active" : "nav-link"}>
							List Group
						</Link>
						<Link to="/ui-elements/media-object" className={isPathActive("/ui-elements/media-object") ? "nav-link active" : "nav-link"}>
							Media Object
						</Link>
						<Link to="/ui-elements/modals" className={isPathActive("/ui-elements/modals") ? "nav-link active" : "nav-link"}>
							Modals
						</Link>
						<Link to="/ui-elements/navigation" className={isPathActive("/ui-elements/navigation") ? "nav-link active" : "nav-link"}>
							Navigation
						</Link>
						<Link to="/ui-elements/pagination" className={isPathActive("/ui-elements/pagination") ? "nav-link active" : "nav-link"}>
							Pagination
						</Link>
						<Link to="/ui-elements/popover" className={isPathActive("/ui-elements/popover") ? "nav-link active" : "nav-link"}>
							Popover
						</Link>
						<Link to="/ui-elements/progress" className={isPathActive("/ui-elements/progress") ? "nav-link active" : "nav-link"}>
							Progress
						</Link>
						<Link to="/ui-elements/spinners" className={isPathActive("/ui-elements/spinners") ? "nav-link active" : "nav-link"}>
							Spinners
						</Link>
						<Link to="/ui-elements/toast" className={isPathActive("/ui-elements/toast") ? "nav-link active" : "nav-link"}>
							Toast
						</Link>
						<Link to="/ui-elements/tooltip" className={isPathActive("/ui-elements/tooltip") ? "nav-link active" : "nav-link"}>
							Tooltip
						</Link>
					</nav>

					<label>Forms</label>
					<nav className="nav flex-column">
						<Link to="/form/form-elements" className={isPathActive("/form/form-elements") ? "nav-link active" : "nav-link"}>
							Form Elements
						</Link>
						<Link to="/form/form-layouts" className={isPathActive("/form/form-layouts") ? "nav-link active" : "nav-link"}>
							Form Layouts
						</Link>
						<Link to="/form/form-validation" className={isPathActive("/form/form-validation") ? "nav-link active" : "nav-link"}>
							Form Validation
						</Link>
						<Link to="/form/form-wizards" className={isPathActive("/form/form-wizards") ? "nav-link active" : "nav-link"}>
							Form Wizards
						</Link>
						<Link to="/form/wysiwyg-editor" className={isPathActive("/form/wysiwyg-editor") ? "nav-link active" : "nav-link"}>
							WYSIWYG Editor
						</Link>
					</nav>

					<label>Charts</label>
					<nav className="nav flex-column">
						<Link to="/charts/chartjs" className={isPathActive("/charts/chartjs") ? "nav-link active" : "nav-link"}>
							ChartJS
						</Link>
					</nav>

					<label>Tables</label>
					<nav className="nav flex-column">
						<Link to="/tables/basic-table" className={isPathActive("/tables/basic-table") ? "nav-link active" : "nav-link"}>
							Basic Tables
						</Link>
						<Link to="/tables/data-tables" className={isPathActive("/tables/data-tables") ? "nav-link active" : "nav-link"}>
							Data Tables
						</Link>
					</nav>
				</div>
				{/* component-item */}
			</div>
			{/* az-content-left */}
		</div>
	);
};

export default withRouter(ComponentsSidebar);
