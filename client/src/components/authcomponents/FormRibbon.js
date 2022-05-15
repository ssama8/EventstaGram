import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
const FormRibbon = () => {
	const { activeTab, formTabs } = useSelector(
		(state) => state.createSignupForm
	);
	const setProgressBar = () => {
		if (activeTab === 0) {
			return "empty";
		}
		if (activeTab === 1) {
			return "half";
		}
		return "full";
	};

	return (
		<Wrapper className='relative flex justify-between text-center'>
			{formTabs.map((tab, index) => {
				return (
					<div key={index} className='flex flex-col items-center'>
						<div className='box'>
							<span>{index + 1}</span>
						</div>
						<p>{tab}</p>
					</div>
				);
			})}

			<div className='line absolute'></div>
			<div className={`progress-line absolute ${setProgressBar()}`}></div>
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
	.line,
	.progress-line {
		background: blue;
		height: 4px;
		left: 10%;
		width: 80%;
		top: 15px;
		z-index: -1;
	}
	.progress-line {
		background: green;
	}
	.empty {
		width: 0%;
	}
	.half {
		width: 40%;
	}
	.full {
		width: 80%;
	}
`;
