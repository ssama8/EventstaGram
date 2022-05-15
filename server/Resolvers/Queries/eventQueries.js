import Event from "../../models/Event.js";

const eventQueries = {
	events: async () => {
		console.log("running");
		try {
			let events = await Event.find();
			console.log(events);
			events = events.map((event) => {
				event.creator.password = null;
				return event;
			});
			return events;
		} catch (error) {
			throw error;
		}
	},
	event: async ({ _id }) => {
		console.log(_id);
		try {
			const event = await Event.findOne({ _id: _id });
			if (event) {
				return {
					status: "success",
					message: "Event found",
					body: event,
				};
			} else {
				return {
					status: "error",
					message: "Can't find event",
				};
			}
		} catch (error) {
			return {
				status: "error",
				message: "Can't find event",
			};
		}
	},
};
export default eventQueries;
