const validateCredentials = (state, action) => {
	const { username, password, confirmPassword } = action.payload;
	if ((!username, !password, !confirmPassword)) {
		state.message = "Please fill out all fields";
		return;
	}
	if (username.length < 6 || username.length > 15) {
		state.message = "Username must be between 6 and 15 characters long";
		return;
	}
	if (!username.match(/[A-Z]/)) {
		console.log("running");
		state.message = "Username needs atleast one capital Letter";
		return;
		// matches
	}
	if (!username.match(/\d/)) {
		state.message = "Username must have atleast one number";
		return;
	}
	if (password.length < 6 || password.length > 20) {
		state.message = "Password must be between 6 and 20 characters long";
		return;
	}
	if (password !== confirmPassword) {
		state.message = "Passwords don't match";
	}
	if (!password.match(/[A-Z]/)) {
		console.log("running");
		state.message = "Password needs atleast one capital Letter";
		return;
		// matches
	}
	if (!password.match(/\d/)) {
		console.log(1);
		state.message = "Password must have atleast one number";
		return;
	}
	state.username = username;
	state.password = password;

	state.message = "Success";
};

export default validateCredentials;
