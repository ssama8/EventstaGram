import React from "react";
import { Link } from "react-router-dom";
import { BsGlobe } from "react-icons/bs";
const Navbar = () => {
	return (
		<nav>
			<section className='flex justify-between px-3'>
				<div className='logo'> Logo</div>
				<ul>
					<li>
						<BsGlobe />
						English
					</li>
					<li>
						{" "}
						<Link to='/signin'> Log in</Link>
					</li>
					<li>
						{" "}
						<Link to='/'> Sign Up</Link>
					</li>
				</ul>
			</section>
		</nav>
	);
};

export default Navbar;
