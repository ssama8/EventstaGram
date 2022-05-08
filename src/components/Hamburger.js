import React from "react";
import styled from "styled-components";
const Hamburger = () => {
	return (
		<HamburgerMenu className='absolute top-4 right-10 flex items-center'>
			<div className='line'></div>
		</HamburgerMenu>
	);
};

export default Hamburger;

const HamburgerMenu = styled.div`
	@media screen and (min-width: 501px) {
		display: none;
	}
	height: 20px;

	.line {
		width: 30px;
		background: black;
		height: 5px;
		position: relative;
	}
	.line:before,
	.line:after {
		content: "";
		position: absolute;
		height: 5px;
		width: 30px;
		background: black;
		top: 7.5px;
	}
	.line:after {
		top: -7.5px;
	}
`;
