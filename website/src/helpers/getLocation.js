const axios = require("axios");

const getLocation = async h => {
	// Removes the port number for development purposes
	h = h.split(":").shift();

	// Divide url into parts separated by "."
	const parts = h.split("."); // ["okc, "compassionchurch", "test"]

	// Set the initial location as the domain name
	let location = `${parts[parts.length - 2]}.${parts[parts.length - 1]}`; // compassionchurch.test

	const mainDomain = "compassionchurch.test";

	// Check if location is the same as main domain. If true, then we need to check for a subdomain
	if (location === mainDomain) {
		// Check if url includes a subdomain and the first item is not www
		if (parts.length > 2 && parts[0] !== "www") {
			// Site is being accessed using a subdomain from the main domain's url
			// Set the location to the subdomain
			location = parts[0];
		}
	}

	location = "okc";

	let url = `http://${process.env.IP}:5000/api/locations/${location}`;

	return axios
		.get(url)
		.then(res => {
			return Promise.resolve(res.data);
		})
		.catch(error => {
			return Promise.reject(error);
		});
};

module.exports = getLocation;
