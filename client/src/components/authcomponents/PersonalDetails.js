import React from "react";
import { useDispatch } from "react-redux";
import {
	goToNextTab,
	goToPreviousTab,
} from "../../features/createUser/signupForm";
import SecQuestionsContainer from "./SecQuestionsContainer";
import FunFact from "./FunFact";
const PersonalDetails = () => {
	const dispatch = useDispatch();
	const nextTab = () => {
		// useDispatch(goToNextTab());
		console.log("running");
		dispatch(goToNextTab());
	};
	const previousTab = () => {
		dispatch(goToPreviousTab());
	};

	return (
		<>
			<SecQuestionsContainer />
			<FunFact />
			<button className='btn'>Review Your Information</button>

			<div className='text-center mt-4 flex justify-around'>
				<button
					className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
					onClick={previousTab}>
					{" "}
					Go to previous page
				</button>
				<button
					className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
					onClick={nextTab}>
					{" "}
					Go to next page
				</button>
			</div>
		</>
	);
};

export default PersonalDetails;
