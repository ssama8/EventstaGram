import mongoose from "mongoose";

const EventSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	date: {
		type: Date,
		required: true,
	},
	attendees: [
		{
			type: Object,
			// ref: "User",
		},
	],
	creator: {
		type: Object,
		// ref: "User",
	},
});

export default mongoose.model("Event", EventSchema, "Events");
