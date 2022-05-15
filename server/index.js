import express from "express";
import bodyParser from "body-parser";
// import { graphqlHttp } from "express-graphql";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";
import mongoose from "mongoose";
import { ObjectId } from "mongodb";
import cors from "cors";
import { createEvent } from "./mutations/index.js";
import dotenv from "dotenv/config";
import schema from "./Schema.js";
import bcrypt from "bcrypt";
import Event from "./models/Event.js";
import User from "./models/User.js";
import { allQueries } from "./Resolvers/Queries/index.js";
import { allMutations } from "./Resolvers/Mutations/index.js";
const Port = 5000;
const app = express();

app.use(bodyParser.json());

app.use(cors());
let events = [];
console.log(allQueries);
const object = {
	...allQueries,
	...allMutations,
	updateEvent: async (args) => {
		const { input } = args;
		const { _id, title, description, price, date } = input;
		if (_id.length !== 24) {
			console.log(_id);

			return JSON.stringify({ error: "Can't find requested event" });
		}
		if (!title && !description && !price && !data) {
			console.log("running");
			return {
				status: "successful",
				message: "nothing to update",
			};
		}
		const objectId = new ObjectId(_id);
		const eventToUpdate = await Event.findOne({ _id: objectId });
		if (!eventToUpdate) {
			return JSON.stringify({ error: "Can't find requested event" });
		} else {
			for (const prop in input) {
				eventToUpdate[prop] = input[prop];
			}
			// console.log(eventToUpdate);
			const updatedEvent = await eventToUpdate.save();
			// console.log(updatedEvent);

			return {
				status: "successful",
				message: "Changes successfuly made",
				body: updatedEvent,
			};
		}
	},

	deleteEvent: async ({ _id, user_id }) => {
		console.log(_id);

		const event = await Event.findOne({ _id: _id });
		const user = await User.findOne({ _id: user_id });
		if (!event || !user) {
			return {
				status: "error",
				message: "Can't find event",
			};
		}
		//627313bbc48863fb3bab89eb
		if (event.creator._id.toString() === user._id.toString()) {
			// let userEvents = user.createdEvents;
			console.log(event._id.toString());
			let userEvents = user.createdEvents.filter((userEvent) => {
				return event._id.toString() !== userEvent._id.toString();
			});
			let eventsAttending = user.eventsAttending.filter((userEvent) => {
				return event._id.toString() !== userEvent._id.toString();
			});
			user.createdEvents = userEvents;
			user.eventsAttending = eventsAttending;
			// const index = userEvents.indexOf(removedEvent);
			// userEvents.splice(index, 1);
			//db.collections.Events.deleteOne(event);
			return null 
			//await user.save();

			return {
				status: "Event successfully deleted",
				message: `The event ${event.title} created by ${user.username} was successfully deleted`,
				body: event,
			};
		} else {
			return {
				status: "error",
				message: "You aren't authorized to delete this event",
			};
		}
	},
};
const db = mongoose.connection;
app.use(
	"/graphql",
	graphqlHTTP({
		schema: schema,
		rootValue: object,

		graphiql: true,
	})
);

mongoose
	.connect(process.env.CONNECTION_URI)
	.then(() => {
		console.log("working");
		app.listen(Port);
	})
	.catch((err) => {
		console.log(err);
		return err;
	});
