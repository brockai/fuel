function handleServiceError(error) {
	let statusCode;
	let message;
	if (error.statusCode === 400) {
		statusCode = 400;
		message = error.reason;
	} else if (error.statusCode === 401) {
		statusCode = 401;
		message = 'Unauthorized access';
	} else if (error.statusCode === 404) {
		statusCode = 404;
		message = 'Index not found';
	} else {
		statusCode = 500;
		message = 'An unexpected error occurred';
	}
	return {
		statusCode,
		error: { message }
	};
}
module.exports = { handleServiceError };
