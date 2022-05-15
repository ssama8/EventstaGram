import React from "react";

import SecQuestionsContainer from "./SecQuestionsContainer";
import FunFact from "./FunFact";
const PersonalDetails = () => {
	return (
		<>
			<SecQuestionsContainer />
			<FunFact />
			<button className='btn'>Review Your Information</button>
		</>
	);
};

export default PersonalDetails;
