import React from "react";
import { useDispatch } from "react-redux";
import { setFunFact } from "../../features/createUser/createUserSlice";
import { useSelector } from "react-redux";
const FunFact = () => {
	const { funFact } = useSelector((state) => state.createUser);
	const dispatch = useDispatch();
	const handleChange = (e) => {
		dispatch(setFunFact(e.target.value));
	};
	return (
		<div className='flex flex-col '>
			<p>Whats one fun fact about you that nobody else knows?</p>
			<input
				type='text'
				name=''
				id=''
				className='border-2 p-2 my-4 w-full'
				placeholder='Enter here'
				value={funFact}
				onChange={handleChange}
			/>
			<p className='text-xs mb-3'>
				PS: This will be referenced if you ever forget your login information
			</p>
		</div>
	);
};

export default FunFact;
