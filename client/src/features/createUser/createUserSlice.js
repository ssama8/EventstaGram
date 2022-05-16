import { createSlice } from "@reduxjs/toolkit";
import { securityQuestions } from "../../utils/securityQuestions";
import validateCredentials from "./validateCredentials";
import validateDetails from "./validatePersonDetails";
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
	submittedPersonalDetails: false,

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
		updateSecAnswers: (state, action) => {
			const { value, number } = action.payload;
			const questionObj = state.securityQuestions;
			if (number === 1) {
				questionObj.question1.answer = value;
			} else if (number === 2) {
				questionObj.question2.answer = value;
			} else {
				questionObj.question3.answer = value;
			}
		},
		resetInformation: (state, action) => {
			state.username = "";
			state.password = "";
			state.securityMessage = "";
		},
		checkInformationValid: (state, action) => {
			validateCredentials(state, action);
		},
		setFunFact: (state, action) => {
			state.funFact = action.payload;
		},
		checkSecValid: (state) => {
			const submission = validateDetails(state);
			console.log(submission);
			if (submission === "success") {
				console.log("running");
				state.submittedPersonalDetails = true;
			}
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
	updateSecAnswers,
} = createUserSlice.actions;
