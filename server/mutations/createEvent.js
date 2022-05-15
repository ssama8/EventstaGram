const createEvent = async (args) => {
	const { eventInput } = args;
	const event = new Event({
		...eventInput,
		date: new Date().getTime().toString(),
	});
	const duplicateTitle = await Event.findOne({
		title: event.title,
	});
	const duplicateDescription = await Event.findOne({
		description: event.description,
	});
	if (duplicateTitle || duplicateDescription) {
		console.log("error");
		return {
			message: "Can't create mutliple events with the same name or description",
		};
	}

	return event
		.save()
		.then(() => {
			return event;
		})
		.catch((err) => {
			throw err;
		});
};

export default createEvent;
