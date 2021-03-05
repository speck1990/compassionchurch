export const useValidator = schema => {
	const validate = values => {
		let promise = new Promise(function (resolve, reject) {
			schema
				.validate(values, { abortEarly: false })
				.then(() => resolve(""))
				.catch(error => {
					let errors = {};
					error.inner.forEach(err => (errors[err.path] = err.errors[0]));
					resolve({ ...errors });
				});
		});

		return promise;
	};

	return validate;
};
