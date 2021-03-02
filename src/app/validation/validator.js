export const validator = (values, schema) => {
	return schema
		.validate(values, { abortEarly: false })
		.then(() => "")
		.catch(error => {
			let errors = {};
			error.inner.forEach(err => (errors[err.path] = err.errors[0]));
			return { ...errors };
		});
};
