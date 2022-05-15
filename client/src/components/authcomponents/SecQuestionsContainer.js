import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { updateDropdown } from "../../features/createUser/createUserSlice";
import { useDispatch } from "react-redux";
import { securityQuestions } from "../../utils/securityQuestions";
const SecQuestionsContainer = () => {
	const dispatch = useDispatch();
	const firstDropdowm = useRef(null);
	const {
		securityQuestions: { question1, question2, question3 },
	} = useSelector((state) => state.createUser);
	const handleFirstDropdown = (e) => {
		dispatch(updateDropdown({ question: e.target.value, number: 1 }));
	};
	const handleSecondDropdown = (e) => {
		dispatch(updateDropdown({ question: e.target.value, number: 2 }));
	};
	const handleThirdDropdown = (e) => {
		dispatch(updateDropdown({ question: e.target.value, number: 3 }));
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
				value={question1.value}>
				{securityQuestions.map((question, idx) => {
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
				onBlur={handleFirstBlur}
			/>

			<select
				name=''
				id=''
				value={question2.value}
				onChange={handleSecondDropdown}>
				{securityQuestions.map((question, idx) => {
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
				onChange={handleThirdDropdown}>
				{securityQuestions.map((question, idx) => {
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
