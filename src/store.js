import { configureStore } from "@reduxjs/toolkit";
import authentication from "./features/authentication/authenticationSlice";
export const store = configureStore({
	reducer: {
		authentication,
	},
});
