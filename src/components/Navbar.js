import React from "react";
import { Link } from "react-router-dom";
import { BsGlobe } from "react-icons/bs";
import styled from "styled-components";
import Hamburger from "./Hamburger.js";
const Navbar = () => {
	return (
		<Wrapper>
			<section className='flex justify-between items-center py-3 px-3'>
				<div className='logo'> Eventstagram</div>
				<ul className='flex navigation-menu'>
					<li className='flex justify-center items-center  '>
						<BsGlobe className='mx-1' />
						English
					</li>
					<li className='px-3 mx-2'>
						{" "}
						<Link to='/signin' className='btn btn-login'>
							Log in
						</Link>
					</li>
					<li>
						<Link to='/' className='btn btn-signup'>
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
	}
	.btn-login {
		background-color: #ddd;
	}
	.btn-signup {
		background-color: green;
	}

	@media screen and (max-width: 768px) {
		.logo {
			font-size: 1.5rem;
		}
		li {
			font-size: 1rem;
		}
		.btn {
			padding: 0.25rem 0.75rem;
		}
	}
	@media screen and (max-width: 500px) {
		.navigation-menu {
			display: none;
		}
	}
`;
