import { createSlice } from "@reduxjs/toolkit";
import { securityQuestions } from "../../utils/securityQuestions";

const initialState = {
	securityQuestions: {
		question1: {
			answer: "",
			value: securityQuestions[0],
		},
		question2: {
			answer: "",
			value: securityQuestions[1],
		},
		question3: {
			answer: "",
			value: securityQuestions[2],
		},
	},
	username: "f",
	password: "f",
	funFact: "",
	message: "",
	securityMessage: "",
};

const createUserSlice = createSlice({
	name: "createUser",
	initialState,
	reducers: {
		updateChoices: (state, action) => {
			console.log(action);
			return state;
		},
		updateDropdown: (state, action) => {
			console.log("running");
			const { question, number } = action.payload;
			const questionObj = state.securityQuestions;
			if (number === 1) {
				questionObj.question1.value = question;
			} else if (number === 2) {
				questionObj.question2.value = question;
			} else {
				questionObj.question3.value = question;
			}
		},
		resetInformation: (state, action) => {
			state.username = "";
			state.password = "";
			state.securityMessage = "";
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
		},
		setFunFact: (state, action) => {
			console.log(action.payload);
			state.funFact = action.payload;
		},
		checkSecValid: (state, action) => {
			const {
				securityQuestions: { question1, question2, question3 },
			} = state;
			console.log(question1.value, question2.value, question3.value);
			if (
				question1.value === question2.value ||
				question1.value === question3.value ||
				question2.value === question3.value
			) {
				console.log("Please pick 3 different security questions to answer");
				state.securityMessage =
					"Please pick 3 different security questions to answer";
			}
			if (
				question1.answer.length < 3 ||
				question2.answer.length < 3 ||
				question3.answer.length < 3
			) {
				console.log("running");
				state.securityMessage =
					"Please provide valid answers that are longer than 2 characters";
			}
			return state;
		},
	},
});

export default createUserSlice.reducer;

export const {
	updateChoices,
	checkInformationValid,
	updateDropdown,
	resetInformation,
	checkSecValid,
	setFunFact,
} = createUserSlice.actions;
