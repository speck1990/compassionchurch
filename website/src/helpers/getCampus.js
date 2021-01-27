const campuses = [
	{
		name: "Compassion Church of Oklahoma City",
		subdomain: "okc",
		domain: "compassionokc.church",
		city: "Oklahoma City",
		state: "Oklahoma"
	},
	{
		name: "Compassion Church of Wichita Falls",
		subdomain: "wichitafalls",
		domain: "compassionwf.church",
		city: "Wichita Falls",
		state: "Texas"
	}
];

const getCampus = h => {
	const parts = h.split(".");

	if (parts.length === 2) return "www";

	const campus = campuses.find(campus => campus.subdomain === parts[0]);

	return campus;
};

module.exports = getCampus;
