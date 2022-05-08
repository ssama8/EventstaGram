import { configureStore } from "@reduxjs/toolkit";
import authentication from "./features/authentication/authenticationSlice";
import modal from "./features/modal/modalSlice";
import createUser from "./features/createUser/createUserSlice";
export const store = configureStore({
	reducer: {
		authentication,
		modal,
		createUser,
	},
});
