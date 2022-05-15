import React from "react";
import styled from "styled-components";
const LanguageModal = () => {
	return (
		<Container
			className='absolute top-0 flex items-center justify-center'
			id='language'>
			<section className='language-modal text-center '>
				<h2 className='text-3xl font-bold'>Choose Language</h2>
				<div className='grid grid-cols-3'>
					
				</div>
			</section>
		</Container>
	);
};

export default LanguageModal;

const Container = styled.section`
	height: 100vh;
	width: 100vw;

	.language-modal {
		background-color: white;
		z-index: 10;
		height: 40vh;
		width: 60vw;
		color: black;
		border-radius: 5px;
		max-width: 1200px;
		padding: 10%;
	}
`;
