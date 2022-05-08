import React, { useRef } from "react";
import SecurityDropdown from "../authcomponents/SecQuestionsDropdown";
import { securityQuestions } from "../../utils/securityQuestions";
import { useSelector } from "react-redux";
import InitialSignUp from "../authcomponents/InitalSignUp";
import FunFact from "../authcomponents/FunFact";
import styled from "styled-components";
const Signup = () => {
	const {
		securityQuestions: { question1, question2, question3 },
		username,
		password,
	} = useSelector((state) => state.createUser);
	const firstQuestion = document.getElementById("question1");
	console.log(firstQuestion);
	return (
		<Wrapper>
			<form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
				{!username && !password && <InitialSignUp />}
				{username && password && <FunFact />}
				<FunFact />
			</form>
			{/* <p className='text-center text-gray-500 text-xs'>
				&copy;2020 Acme Corp. All rights reserved.
			</p> */}
		</Wrapper>
	);
};

export default Signup;

const Wrapper = styled.section`
	width: 100vw;
	height: 100vh;
	justify-content: center;
	display: flex;

	form {
		width: 400px;
		align-self: center;
		justify-self: center;
		border: 1px solid grey;
	}
`;
