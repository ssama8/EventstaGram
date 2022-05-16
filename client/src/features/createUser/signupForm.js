import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	formTabs: ["Account Setup", "Personal Details", "Confirm Info"],
	activeTab: 0,
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
	},
});

export default createSignupFormSlice.reducer;

export const { goToNextTab, goToPreviousTab } = createSignupFormSlice.actions;
