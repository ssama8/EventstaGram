import React from "react";

const FunFact = () => {
	return (
		<div>
			<p>Whats one fun fact about you that nobody else knows?</p>
			<input
				type='text'
				name=''
				id=''
				className='border-black border-2 my-4'
				placeholder='Enter here'
			/>
			<p className='text-xs'>
				PS: This will be referenced if you ever forget your login information
			</p>
		</div>
	);
};

export default FunFact;
