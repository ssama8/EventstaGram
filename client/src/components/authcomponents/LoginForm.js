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
import { useMutation } from "@apollo/client";
import { LOGIN_TO_ACCOUNT } from "../../gql/Mutation.js";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
const LoginForm = () => {
	const [login, { data, loading, error }] = useMutation(LOGIN_TO_ACCOUNT);

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const resp = await login({
				variables: { username: "user1", password: "yo" },
			});
			console.log(resp);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<Box component='form' noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
			<TextField
				margin='normal'
				required
				fullWidth
				id='username'
				label='Username'
				name='username'
				autoComplete='username'
				autoFocus
			/>
			<TextField
				margin='normal'
				required
				fullWidth
				name='password'
				label='Password'
				type='password'
				id='password'
				autoComplete='current-password'
			/>
			<FormControlLabel
				control={<Checkbox value='remember' color='primary' />}
				label='Remember me'
			/>
			<Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
				Sign In
			</Button>
			<Grid container>
				<Grid item xs>
					<Link href='#' variant='body2'>
						Forgot password?
					</Link>
				</Grid>
				<Grid item>
					<Link href='#' variant='body2'>
						{"Don't have an account? Sign Up"}
					</Link>
				</Grid>
			</Grid>
			<Copyright sx={{ mt: 5 }} />
		</Box>
	);
};

export default LoginForm;
