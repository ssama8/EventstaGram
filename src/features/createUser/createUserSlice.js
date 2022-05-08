import { createSlice } from "@reduxjs/toolkit";
import { securityQuestions } from "../../utils/securityQuestions";

let secondQuestionChoices = [...securityQuestions].slice(
	1,
	securityQuestions.length
);
let thirdQuestionChoices = [...secondQuestionChoices].slice(
	1,
	secondQuestionChoices.length
);
const initialState = {
	securityQuestions: {
		question1: securityQuestions,
		question2: secondQuestionChoices,
		question3: thirdQuestionChoices,
	},
	username: "",
	password: "",
	message: "",
};

const createUserSlice = createSlice({
	name: "createUser",
	initialState,
	reducers: {
		updateChoices: (state, action) => {
			console.log(action);
			return state;
		},
		checkInformationValid: (state, action) => {
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
				console.log(1);
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
			// console.log(username, password, confirmPassword);
		},
	},
});

export default createUserSlice.reducer;

export const { updateChoices, checkInformationValid } = createUserSlice.actions;