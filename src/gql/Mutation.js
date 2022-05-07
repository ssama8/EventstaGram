import { gql } from "@apollo/client";
export const LOGIN_TO_ACCOUNT = gql`
	mutation {
		login(username: "user1", password: "yo") {
			status
			message
		}
	}
`;
