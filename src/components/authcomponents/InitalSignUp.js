import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkInformationValid } from "../../features/createUser/createUserSlice";
const InitalSignUp = () => {
	const { message } = useSelector((state) => state.createUser);
	const [username, setUsername] = useState("");

	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const dispatch = useDispatch();
	const handleClick = () => {
		dispatch(
			checkInformationValid({
				username,
				password,
				confirmPassword,
			})
		);
	};
	return (
		<>
			<p className='error'>{message}</p>
			<div className='mb-4'>
				<label
					className='block text-gray-700 text-sm font-bold mb-2'
					htmlFor='username'>
					Username
				</label>
				<input
					className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
					id='username'
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					type='text'
					placeholder='Enter Username'
				/>
			</div>

			<div className='mb-6'>
				<label
					className='block text-gray-700 text-sm font-bold mb-2'
					htmlFor='password'>
					Password
				</label>
				<input
					className='shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
					id='password'
					type='password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder='Enter Password'
				/>
			</div>
			<div className='mb-6'>
				<label
					className='block text-gray-700 text-sm font-bold mb-2'
					htmlFor='password'>
					Confirm Password
				</label>
				<input
					className='shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
					id='confirm-password'
					type='password'
					value={confirmPassword}
					onChange={(e) => setConfirmPassword(e.target.value)}
					placeholder='Confirm Password'
				/>
			</div>
			<div className='flex items-center justify-center'>
				<button
					className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
					type='button'
					onClick={handleClick}>
					Sign Up
				</button>
			</div>
		</>
	);
};

export default InitalSignUp;
