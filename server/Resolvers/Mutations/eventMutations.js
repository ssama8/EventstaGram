import User from "../../models/User.js";
import Event from "../../models/Event.js";

const eventMutations = {
	createEvent: async (args) => {
		const { eventInput } = args;
		console.log("running");
		const event = new Event({
			...eventInput,
			date: new Date().getTime().toString(),
		});
		const user = await User.findById(eventInput.creator);
		// user.password = null;

		if (!user) {
			throw new Error("User attempting to create this event doesn't exist");
		}

		const duplicateTitle = await Event.findOne({
			title: event.title,
		});
		const duplicateDescription = await Event.findOne({
			description: event.description,
		});

		if (duplicateTitle || duplicateDescription) {
			console.log("error");

			throw new Error(
				"Can't create mutliple events with the same name or description"
			);
		}
		try {
			if (user.createdEvents.length > 0) {
				user.createdEvents = [...user.createdEvents, event];
			} else {
				user.createdEvents.push(event);
			}
			user.eventsAttending.push(event);
			event.creator = user;
			const { username, _id } = user;
			event.attendees.push({ username: username, _id: _id });

			await user.save();

			await event.save();
			// console.log(event.creator);

			event.creator.password = null;
			return event;
		} catch (error) {
			throw error;
		}
	},
};

export default eventMutations;
