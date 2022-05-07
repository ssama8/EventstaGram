import * as React from "react";
import Copyright from "../Copyright.js";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import FormContainer from "../authcomponents/FormContainer.js";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { GET_ALL_EVENT_TItles, GET_ALL_USERS } from "../gql/Query";

const theme = createTheme();
const SignInSide = () => {
	// console.log(data);

	return (
		<ThemeProvider theme={theme}>
			<Grid container component='main' sx={{ height: "100vh" }}>
				<CssBaseline />
				<FormContainer />

				<Grid
					item
					xs={false}
					sm={4}
					md={7}
					sx={{
						backgroundImage: "url(https://source.unsplash.com/random)",
						backgroundRepeat: "no-repeat",
						backgroundColor: (t) =>
							t.palette.mode === "light"
								? t.palette.grey[50]
								: t.palette.grey[900],
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}
				/>
			</Grid>
		</ThemeProvider>
	);
};

export default SignInSide;
