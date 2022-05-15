import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	loggedIn: Boolean,
	createdEvents: [
		{
			type: Object,
			ref: "Event",
		},
	],
	eventsAttending: [
		{
			type: Object,
			ref: "Event",
		},
	],
});

export default mongoose.model("User", UserSchema, "Users");
