import React from "react";
import styled from "styled-components";
const FormRibbon = () => {
	return (
		<Wrapper className='relative flex justify-between text-center'>
			<div className='flex flex-col items-center'>
				<div className='box'>
					<span> 1</span>
				</div>
				<p>Account Setup</p>
			</div>
			<div className='flex flex-col items-center'>
				<div className='box'>
					<span> 2</span>
				</div>
				<p>Social Profiles</p>
			</div>
			<div className='flex flex-col items-center'>
				<div className='box'>
					<span>3</span>
				</div>
				<p>Personal Details</p>
			</div>

			<div className='line absolute'></div>
		</Wrapper>
	);
};

export default FormRibbon;
const Wrapper = styled.section`
	// div {
	// 	background: green;
	// }
	.box {
		background: grey;
		width: 30px;
		height: 30px;
		// background: blue;
	}
	.line {
		background: blue;
		height: 2px;
		left: 10%;
		width: 80%;
		top: 15px;
		z-index: -1;
	}
`;
