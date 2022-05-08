import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { useNavigate } from "react-router";
import Navbar from "../Navbar";
import Sidebar from "../modals/Sidebar";
const Home = () => {
	const { sidebarOpen } = useSelector((state) => state.modal);
	const navigate = useNavigate();
	// console.log(languageModalOpen);
	// useEffect(() => {
	// 	//if the user isn't logged in then redirect them to the signin page
	// 	if (!login) {
	// 		navigate("/signin");
	// 	}
	// }, [login]);

	return (
		<main>
			<Navbar />
			{sidebarOpen && <Sidebar />}
		</main>
	);
};

export default Home;
