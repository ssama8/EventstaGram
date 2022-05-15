import User from "../../models/User.js";
import Event from "../../models/Event.js";
import bcrypt from "bcrypt";
const userMutations = {
	createUser: async ({ userInput }) => {
		const existingUser = await User.findOne({
			username: userInput.username,
		});
		if (existingUser) {
			throw new Error("User already exists");
		}
		const password = bcrypt.hashSync(userInput.password, 10);
		const user = new User({
			username: userInput.username,
			password: password,
			loggedIn: false,
		});
		try {
			user.save();
			return { ...user._doc, password: null };
		} catch (error) {
			throw error;
		}
	},
	bookEvent: async ({ event_id, user_id }) => {
		const event = await Event.findById(event_id);
		const user = await User.findById(user_id);
		if (!event) {
			throw new Error("Can't book an event that doesn't exist");
		}
		if (!user) {
			throw new Error("A user that doesn't exist can't book an event");
		}
		const eventAlreadyBooked = user.eventsAttending.find((bookedEvent) => {
			return bookedEvent._id.toString() === event._id.toString();
		});

		console.log(eventAlreadyBooked);
		if (eventAlreadyBooked) {
			throw new Error("Can't book an event you are already attending");
		} else {
			console.log("running");
			console.log(user);
			const { username, _id } = user;
			// const newUser = {...user, user}
			event.attendees.push({ username: username, _id: _id });

			user.eventsAttending.push(event);
		}
		// event.attendees.push(user);
		// console.log(event.attendees);
		try {
			await event.save();
			await user.save();
			return {
				status: "Successfully booked event",
				message: `Congrats, ${user.username} you are attending ${event.title}`,
				body: event,
			};
		} catch (error) {
			throw new Error(error);
		}
		// console.log(user);

		// return null;
	},
	login: async ({ username, password }) => {
		const user = await User.findOne({ username: username });
		if (user && bcrypt.compareSync(password, user.password)) {
			if (user.loggedIn) {
				return {
					status: "Error",
					message: "Your account is already logged in ",
				};
			}
			user.loggedIn = true;
			await user.save();
			return {
				status: "Success!",
				message: `${username} is successfully logged in`,
				body: user._id,
			};
		} else {
			return {
				status: `Error`,
				message: `The username or password doesn't extist `,
			};
		}
	},
	logout: async ({ _id }) => {
		if (_id.length !== 24) {
			return {
				status: `Error`,
				message: `Can't log out`,
			};
		}
		const user = await User.findById(_id);
		if (!user || !user.loggedIn) {
			return {
				status: `Error`,
				message: `Can't log out`,
			};
		} else {
			user.loggedIn = false;
			await user.save();
			return {
				status: "Success!",
				message: `${user.username} is successfully logged out`,
				// body: user._id,
			};
		}
	},
};

export default userMutations;
