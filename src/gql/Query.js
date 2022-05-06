import { gql } from "@apollo/client";

export const GET_ALL_EVENT_TItles = gql`
	query {
		events {
			_id
			title
		}
	}
`;

export const Login_TO_ACCOUNT = gql`
	mutation {
		login(username: "user1", password: "yo") {
			status
			message
		}
	}
`;
