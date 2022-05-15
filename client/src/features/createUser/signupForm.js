import { createSlice } from "@reduxjs/toolkit";
import InitalSignUp from "../../components/authcomponents/InitalSignUp";
import PersonalDetails from "../../components/authcomponents/PersonalDetails";
import EditInformation from "../../components/authcomponents/EditInformation";
const initialState = {
	formTabs: ["Account Setup", "Personal Details", "Confirm Information"],
	formComponents: [<InitalSignUp />, <PersonalDetails />, <EditInformation />],
	activeTab: 0,
};

const createSignupFormSlice = createSlice({
	name: "createSignupForm",
	initialState,
	reducers: {},
});

export default createSignupFormSlice.reducer;
