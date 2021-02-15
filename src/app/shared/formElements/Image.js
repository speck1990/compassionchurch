import React from "react";
import Dropzone from "./Dropzone";

const Image = props => {
	return (
		<div className={`row row-xs mg-b-20`}>
			<div className="col-md-4">
				<label htmlFor="test" className="form-label mg-b-0">
					{props.label}
				</label>
			</div>
			<div className="col-md-8 mg-t-5 mg-md-t-0">
				<Dropzone onDrop={props.onDrop} image={props.image} />
			</div>
		</div>
	);
};

export default Image;
