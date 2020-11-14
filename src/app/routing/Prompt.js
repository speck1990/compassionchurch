import React, { useEffect } from "react";
import { Container } from "react-bootstrap";

const Prompt = () => {
	useEffect(() => {
		window.addEventListener("beforeunload", alertUser);
		// window.addEventListener("unload", handleEndConcert);
		return () => {
			window.removeEventListener("beforeunload", alertUser);
			// window.removeEventListener("unload", handleEndConcert);
			// handleEndConcert();
		};
	}, []);
	const alertUser = e => {
		e.preventDefault();
		e.returnValue = "";
	};
	// const handleEndConcert = async () => {
	// 	await fetcher({
	// 		url: endConcert(concert.id),
	// 		method: "PUT"
	// 	});
	// };
	return (
		<Container>
			<Prompt when={true} message={() => "Are you sure you want to leave this page?"} />
		</Container>
	);
};

export default Prompt;
