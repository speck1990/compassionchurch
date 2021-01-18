import React, { useContext } from "react";
import { Form } from "react-bootstrap";
import PageContext from "../../../context/page/pageContext";

const Button = ({ block, index }) => {
	const pageContext = useContext(PageContext);

	const { current, updateCurrent } = pageContext;

	return (
		<div className="pd-30 pd-sm-40 bg-gray-200 wd-xl-100p">
			<div className="row row-xs">
				<div className="col-md-6">
					<Form.Control type="text" placeholder="Label" />
				</div>
				<div className="col-md-6 mg-t-10 mg-md-t-0">
					<Form.Control type="password" placeholder="Url" />
				</div>
			</div>
		</div>
	);
};

export default Button;
