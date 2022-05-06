import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	login: false,
};

const authenticationSlice = createSlice({
	name: "authentication",
	initialState,
	reducers: {
		checkLogin: (state) => {
			console.log(state.login);
		},
	},
});

export default authenticationSlice.reducer;
export const { checkLogin } = authenticationSlice.actions;
