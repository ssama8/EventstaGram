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



export const GET_ALL_USERS = gql`
	query {
		users {
			username
			_id
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

