import User from "../../models/User.js";
import bcrypt from "bcrypt";

const userQueries = {
	users: async () => {
		try {
			let users = await User.find();
			return users;
		} catch (error) {
			throw error;
		}
	},
	user: async ({ _id }) => {
		console.log("fei");
		try {
			const user = await User.findById(_id);
			// console.log(user);
			return { ...user._doc, password: null };
		} catch (error) {
			// console.log(error);
			throw error;
		}
	},
};

export default userQueries;
