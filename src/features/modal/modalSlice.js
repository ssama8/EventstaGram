import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	sidebarOpen: false,
};

const modalSlice = createSlice({
	name: "authentication",
	initialState,
	reducers: {
		openSidebar: (state) => {
			state.sidebarOpen = true;
		},
		closeSidebar: (state) => {
			state.sidebarOpen = false;
		},
	},
});

export default modalSlice.reducer;
export const { openSidebar, closeSidebar } = modalSlice.actions;
