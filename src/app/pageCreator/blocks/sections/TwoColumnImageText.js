import React from "react";
import Image from "./blocks/Image";
import Paragraph from "./blocks/Paragraph";
import Input from "./blocks/Input";

const TwoColumnImageText = () => {
	const onDelete = () => {
		console.log("onDelete");
	};

	const onDrop = () => {
		console.log("onDrop");
	};

	const onChange = () => {
		console.log("onChange");
	};

	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-md-6">
					<Image image={null} onDelete={onDelete} onDrop={onDrop} />
				</div>
				<div className="col-md-6">
					<Input label="Heading" name="heading" type="text" value={null} error={null} onChange={onChange} />
					<Input label="Body" name="body" as="textarea" type="text" value={null} error={null} onChange={onChange} />
					<div className="row">
						<div className="col-md-6">
							<Input label="Button Label" name="buttonLabel" type="text" value={null} error={null} onChange={onChange} />
						</div>
						<div className="col-md-6">
							<Input label="Button Link" name="buttonLink" type="text" value={null} error={null} onChange={onChange} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TwoColumnImageText;
