const validateDetails = (state) => {
	const {
		securityQuestions: { question1, question2, question3 },
	} = state;
	if (
		question1.value === question2.value ||
		question1.value === question3.value ||
		question2.value === question3.value
	) {
		state.securityMessage =
			"Please pick 3 different security questions to answer";
		return;
	}
	if (
		question1.answer.length < 3 ||
		question2.answer.length < 3 ||
		question3.answer.length < 3
	) {
		state.securityMessage =
			"Please provide valid answers that are longer than 2 characters";
		return;
	}
	const funFactWords = state.funFact.split(" ");
	if (funFactWords.length < 3) {
		state.securityMessage = "Fun Fact must be atleast 3 words long";
		return;
	}
	state.securityMessage = "Successfully filled out details";
	return "success";
};

export default validateDetails;
