import React, { useContext } from "react";
import { Button, Popover, OverlayTrigger } from "react-bootstrap";
import PageContext from "../../context/page/pageContext";

const AddBlock = ({ location, isVisible }) => {
	const pageContext = useContext(PageContext);

	const { addBlock } = pageContext;

	const blockTypes = ["heading", "paragraph", "image"];

	const handleClick = (type, location, e) => {
		e.preventDefault();
		const position = location + 1;
		addBlock({ type, text: "" }, position);
	};

	return (
		<div className="row justify-content-md-center mg-t-10">
			<OverlayTrigger
				trigger="focus"
				placement="top"
				overlay={
					<Popover id="popover-basic" style={{ maxWidth: "500px" }}>
						<Popover.Content>
							{blockTypes.map((type, key) => (
								<Button variant="primary btn-rounded mg-l-5 mg-r-5" key={key} onClick={e => handleClick(type, location, e)}>
									{type}
								</Button>
							))}
						</Popover.Content>
					</Popover>
				}
			>
				<Button variant="dark">
					<i className="fas fa-plus"></i>
				</Button>
			</OverlayTrigger>
		</div>
	);
};

export default AddBlock;
