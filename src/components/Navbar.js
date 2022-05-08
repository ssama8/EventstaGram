import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Hamburger from "./Hamburger.js";
const Navbar = () => {
	return (
		<Wrapper>
			<section className='flex justify-between items-center py-3 px-3'>
				<div className='logo'> Eventstagram</div>
				<ul className='flex navigation-menu'>
					{/* <li className='flex justify-center items-center' onClick={openModal}
						<BsGlobe className='mx-1' />
						English
					</li> */}
					<li>Home</li>
					<li>About</li>
					<li className='separate-links'>Events</li>
					<li>
						{" "}
						<Link to='/signin' className='btn btn-login'>
							Log in
						</Link>
					</li>
					<li>
						<Link to='/signup' className='btn btn-signup'>
							Sign Up
						</Link>
					</li>
				</ul>
			</section>
			<Hamburger />
		</Wrapper>
	);
};

export default Navbar;
const Wrapper = styled.nav`
	.logo {
		font-family: "Luckiest Guy", cursive;
		font-size: 2rem;
		color: green;
	}
	li {
		cursor: pointer;
		font-size: 1.15rem;
		font-weight: 500;
		margin: 0 0.5rem;
	}
	// .btn-login {
	// 	background-color: #ddd;
	// }
	// .btn-signup {
	// 	background-color: green;
	// }
	.separate-links {
		margin-right: 3rem;
	}

	@media screen and (max-width: 768px) {
		.logo {
			font-size: 1.5rem;
		}
		li,
		.separate-links {
			margin-right: 0.25rem;
			font-size: 1rem;
		}
	}
	@media screen and (max-width: 500px) {
		.navigation-menu {
			display: none;
		}
	}
`;
