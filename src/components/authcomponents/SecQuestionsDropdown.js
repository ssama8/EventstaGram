import React from "react";
import { useDispatch } from "react-redux";
import { updateChoices } from "../../features/createUser/createUserSlice";
const SecQuestionsDropdown = ({ questions }) => {
	const dispatch = useDispatch();
	const handleChange = (e) => {
		console.log(e.target.value);
		dispatch(updateChoices(e.target.value));
	};
	return (
		<select name='' id='' onChange={handleChange}>
			{questions.map((question, idx) => {
				return (
					<option value={question} key={idx}>
						{question}
					</option>
				);
			})}
		</select>
	);
};

export default SecQuestionsDropdown;
