import { gql } from "@apollo/client";

export const GET_ALL_EVENT_TItles = gql`
	query {
		events {
			_id
			title
			creator {
				username
				password
			}
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

export const GET_ALL_USERS = gql`
	query {
		users {
			username
			_id
			password
			createdEvents {
				_id
				title
				description
			}
			eventsAttending {
				title
			}
		}
	}
`;
