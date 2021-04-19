import React, { useContext } from "react";
import aboutUsImage from "./images/about-us.png";
import PageContext from "../../../context/page/pageContext";
import blockTypes from "../blockTypes";

const Sections = ({ addLocation, closeModal }) => {
	const pageContext = useContext(PageContext);

	const { addBlock } = pageContext;

	const onClick = sourceIndex => {
		addBlock({ type: blockTypes[sourceIndex].type, ...blockTypes[sourceIndex].template });
		closeModal();
	};

	return (
		<div className="section-button-wrapper container">
			<div className="row">
				{blockTypes.map(({ type, icon, image }, key) => (
					<div className="section-button col-md-6" key={key}>
						<button key={key} onClick={() => onClick(key)}>
							<img alt="section-button" src={image} style={{ width: "500px" }} />
						</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default Sections;
