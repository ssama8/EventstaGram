import React from "react";
import { goToPreviousTab } from "../../features/createUser/signupForm";
import { useDispatch } from "react-redux";
const EditInformation = () => {
	const dispatch = useDispatch();

	const previousTab = () => {
		dispatch(goToPreviousTab());
	};
	console.log("apparent");
	return (
		<>
			<div className='text-center mt-4 flex justify-around'>
				<button
					className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
					onClick={previousTab}>
					{" "}
					Go to previous page
				</button>
				<button
					className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
					onClick={() => console.log("Submit form")}>
					{" "}
					Submit
				</button>
			</div>
		</>
	);
};

export default EditInformation;
