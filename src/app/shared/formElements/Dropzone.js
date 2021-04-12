import React, { useMemo } from "react";
import { Fragment } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "react-bootstrap";
import axios from "axios";

const baseStyle = {
	height: "95%",
	textAlign: "center",
	padding: "20px",
	borderWidth: 2,
	borderRadius: 2,
	borderColor: "#eeeeee",
	borderStyle: "dashed",
	backgroundColor: "#fafafa",
	color: "#bdbdbd",
	outline: "none",
	transition: "border .24s ease-in-out"
};

const activeStyle = {
	borderColor: "#2196f3"
};

const acceptStyle = {
	borderColor: "#00e676"
};

const rejectStyle = {
	borderColor: "#ff1744"
};

const Dropzone = ({ onDrop, onDelete = null, image = null, className }) => {
	const uploadImage = async file => {
		let formData = new FormData();

		formData.append("image", file);

		const upload = await axios.post(`http://${process.env.REACT_APP_URL}/api/pages/upload`, formData);
		return upload.data.path;
	};

	const handleOnDrop = async (files, rejectedFiles) => {
		const url = await uploadImage(files[0]);
		onDrop(`http://${process.env.REACT_APP_URL}/${url}`);
	};

	const handleOnImageDelete = async (e, image) => {
		e.preventDefault();
		onDelete(image);
	};

	const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } = useDropzone({ onDrop: handleOnDrop, accept: "image/*", multiple: false });

	const style = useMemo(
		() => ({
			...baseStyle,
			...(isDragActive ? activeStyle : {}),
			...(isDragAccept ? acceptStyle : {}),
			...(isDragReject ? rejectStyle : {})
		}),
		[isDragActive, isDragReject, isDragAccept]
	);

	return (
		<Fragment>
			{image === null ? (
				<div {...getRootProps({ style })} className={className}>
					<input {...getInputProps()} />
					<p>
						Drag 'n' drop an image here,
						<br />
						or click to select an image
					</p>
				</div>
			) : (
				<div style={{ ...baseStyle, padding: "10px", position: "relative" }}>
					<img alt="" style={{ maxWidth: "250px", maxHeight: "175px" }} src={image} />

					{onDelete && (
						<Button variant="btn-icon" style={{ paddingRight: 0 }} onClick={e => handleOnImageDelete(e, image)}>
							<i className="fas fa-times"></i>
						</Button>
					)}
				</div>
			)}
		</Fragment>
	);
};

export default Dropzone;
