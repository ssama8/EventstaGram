import React from "react";

const FunFact = () => {
	return (
		<div className='flex flex-col '>
			<p>Whats one fun fact about you that nobody else knows?</p>
			<input
				type='text'
				name=''
				id=''
				className='border-2 p-2 my-4 w-full'
				placeholder='Enter here'
			/>
			<p className='text-xs mb-3'>
				PS: This will be referenced if you ever forget your login information
			</p>
		</div>
	);
};

export default FunFact;
