import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
const SecQuestionsContainer = () => {
	const firstDropdowm = useRef(null);
	const [firstAnswer, setFirstAnswer] = useState("");
	const {
		securityQuestions: { question1, question2, question3 },
		username,
		password,
	} = useSelector((state) => state.createUser);
	console.log(question1.choices);
	const handleFirstDropdown = (e) => {
		console.log(e.target.value);
	};
	const handleFirstBlur = (e) => {
		console.log("blur");
		console.log(firstDropdowm.current);
	};
	return (
		<Container>
			<h3 className='mb-6 text-xl'>
				Pick 3 different Security Question to Answer
			</h3>
			<select
				name=''
				id=''
				onChange={handleFirstDropdown}
				// className='border-black border-2'
				value={question1.value}>
				{question1.choices.map((question, idx) => {
					return (
						<option value={question} key={idx}>
							{question}
						</option>
					);
				})}
			</select>
			<input
				type='text'
				name='first-sec-question'
				id='first-sec-question'
				className='border-2 '
				// value={firstAnswer}
				onBlur={handleFirstBlur}
			/>

			<select
				name=''
				id=''
				value={question2.value}
				// className='border-black border-2'
			>
				{question2.choices.map((question, idx) => {
					return (
						<option value={question} key={idx}>
							{question}
						</option>
					);
				})}
			</select>
			<input
				type='text'
				name='second-sec-question'
				id='second-sec-question'
				className='border-2 '
			/>

			<select
				name=''
				id=''
				value={question3.value}

				// className='border-black border-2'
			>
				{question3.choices.map((question, idx) => {
					return (
						<option value={question} key={idx}>
							{question}
						</option>
					);
				})}
			</select>
			<input
				type='text'
				name='third-sec-question'
				id='third-sec-question'
				className='border-2'
			/>
			<button className='btn'>Review Your Information</button>
		</Container>
	);
};

export default SecQuestionsContainer;

const Container = styled.div`
	text-align: center;
	input,
	select {
		width: 100%;
	}
	select {
		font-size: 1.15rem;
	}
	input {
		margin-top: 0.5rem;
		margin-bottom: 2rem;
		padding: 0.25rem;
	}
`;
