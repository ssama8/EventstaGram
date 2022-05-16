import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	formTabs: ["Account Setup", "Personal Details", "Confirm Info"],
	submittedPersonalDetals: false,
	activeTab: 0,
	secQuestionMessage: "",
};

const createSignupFormSlice = createSlice({
	name: "createSignupForm",
	initialState,
	reducers: {
		goToNextTab: (state, action) => {
			state.activeTab++;
		},
		goToPreviousTab: (state, action) => {
			state.activeTab--;
		},
		checkSecValid: (state, action) => {},
	},
});

export default createSignupFormSlice.reducer;

export const { goToNextTab, goToPreviousTab } = createSignupFormSlice.actions;
