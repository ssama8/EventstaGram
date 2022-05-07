import { useEffect, useState } from "react";
// import logo from './logo.svg';
// import "./App.css";
import SignInSide from "./components/pages/SignIn";
import Home from "./components/pages/Home";
// import Login from "./pages/Login";
import { useQuery } from "@apollo/client";
// import { GET_ALL_EVENT_TItles } from "./gql/Query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
	// const { loading, error, data } = useQuery(GET_ALL_EVENT_TItles);
	// if (loading) {
	// 	return <h1>...Loading</h1>;
	// }
	// if (error) {
	// 	return <h1>..Can't Get All Data</h1>;
	// }
	// const { events } = data;
	// const getData = async () => {
	// 	try {
	// 		const test = await data;
	// 		console.log(test);
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };
	// console.log(data);

	// if (data) {
	// 	console.log(data["pokemon_v2_pokemonspecies"]);
	// 	setPokemon(data["pokemon_v2_pokemonspecies"]);
	// }

	// useEffect(() => {
	// 	fetchData();
	// }, []);

	return (
		<>
			{/* <Button variant='contained'>Hello World</Button> */}
			<Router>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/signin' element={<SignInSide />} />
				</Routes>
			</Router>
			{/* <SignInSide /> */}
			{/* <Login /> */}
		</>

		// <div>
		// 	{events.map((event) => {
		// 		console.log(event);
		// 		return <div key={event._id}>Event </div>;
		// 	})}
		// </div>
	);
}

export default App;
