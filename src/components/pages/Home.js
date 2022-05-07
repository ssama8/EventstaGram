import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Navbar from "../Navbar";
import LanguageModal from "../modals/LanguageModal";
const Home = () => {
	const { login } = useSelector((state) => state.authentication);
	const navigate = useNavigate();
	// useEffect(() => {
	// 	//if the user isn't logged in then redirect them to the signin page
	// 	if (!login) {
	// 		navigate("/signin");
	// 	}
	// }, [login]);

	return (
		<main>
			<Navbar />
			<LanguageModal />
		</main>
	);
};

export default Home;
