import React, { Fragment, useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";

const baseStyle = {
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

const Image = props => {
	const [file, setFile] = useState([]);
	const onDrop = (files, rejectedFiles) => {
		setFile(URL.createObjectURL(files[0]));
	};

	const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } = useDropzone({ onDrop, accept: "image/*", multiple: false });

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
			{file.length === 0 ? (
				<div {...getRootProps({ style })}>
					<input {...getInputProps()} />
					<p>Drag 'n' drop an image here, or click to select an image</p>
				</div>
			) : (
				<div>
					<img alt="test" style={{ width: "100px", height: "auto" }} src={file} />
				</div>
			)}
		</Fragment>
	);
};

export default Image;
