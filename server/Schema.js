import { buildSchema } from "graphql";

const schema = buildSchema(`
     
   

       type Event {
        _id: ID
        title: String!
        description: String!
        price: Float!
        date: String!
        creator: User!
        attendees: [User!] 
      }
      
      type User {
        _id: ID!
        username: String!
        password: String
        loggedIn: Boolean
        createdEvents: [Event!]
        eventsAttending: [Event!]
      }
      
      input UserInput{
        username: String!
        password: String

      }

      type loginStatus {
        status: String !
        message: String !
        body: ID 
      }

      type RootQuery{
        events: [Event!]!
        event(_id: ID!) : requestStatus
        users: [User!]!
        user(_id: ID!) : User
        
      }


      input EventInput {
        title: String!
        description: String!
        price: Float!
        creator: ID ! 

      }

      input updateEvent {
        _id: ID !
        title: String
        description: String
        price: Float
        date: String
      }

      type requestStatus {
        status: String !
        message: String !
        body: Event
      }

      type RootMutation {
        createEvent(eventInput: EventInput) : Event
        createUser(userInput: UserInput) : User
        updateEvent(input: updateEvent) : requestStatus
        deleteEvent(_id: ID ! , user_id: ID !) : requestStatus
        bookEvent(event_id: ID !, user_id: ID !) : requestStatus
        login(username: String!, password: String!) : loginStatus
        logout(_id: ID!) : requestStatus

      }

      schema {
        query: RootQuery
        mutation: RootMutation
      }
    `);

export default schema;
