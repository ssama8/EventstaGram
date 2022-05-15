import React, { useRef } from "react";
import { securityQuestions } from "../../utils/securityQuestions";
import { useSelector } from "react-redux";
import InitialSignUp from "../authcomponents/InitalSignUp";
import FunFact from "../authcomponents/FunFact";
import styled from "styled-components";
import SecQuestionsContainer from "../authcomponents/SecQuestionsContainer";
import FormRibbon from "../authcomponents/FormRibbon";
import PersonalDetails from "../authcomponents/PersonalDetails";
const Signup = () => {
	const { username, password } = useSelector((state) => state.createUser);
	const { formComponents, activeTab } = useSelector(
		(state) => state.createSignupForm
	);
	return (
		<Wrapper className='items-center flex justify-center'>
			<section>
				<FormRibbon />
				<form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
					{/* {!username && !password && <InitialSignUp />}
				{username && password && <FunFact />} */}
					{formComponents[activeTab]}
					{/* <FunFact /> */}
				</form>
				{/* <p className='text-center text-gray-500 text-xs'>
				&copy;2020 Acme Corp. All rights reserved.
			</p> */}
			</section>
		</Wrapper>
	);
};

export default Signup;

const Wrapper = styled.section`
	width: 100vw;
	height: 100vh;

	form {
		max-width: 500px;
		align-self: center;
		border: 1px solid grey;
	}
`;
