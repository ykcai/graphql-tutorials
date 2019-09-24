import { GraphQLServer } from "graphql-yoga";
import { Agent } from "https";
import { getPackedSettings } from "http2";

// Scalar Types - String, Boolean, Int, Float, ID (unqiue)

// Type defintions (schema)
const typeDefs = `
    type Query {
      me: User!
      post: Post!
    }

    type User {
      id: ID!
      name: String!
      email: String!
      age: Int
    }

    type Post {
      id: ID!
      title: String!
      body: String!
      published: Boolean!
    }
`;

// Resolvers
const resolvers = {
  Query: {
    me() {
      return {
        id: "123456789",
        name: " Michael",
        email: "michael.cai!@ibm.com",
        age: "22"
      };
    },
    post() {
      return {
        id: "98u3204f",
        title: "Work of my life",
        body: "body of my life book so good",
        published: false
      }
    }
  }
};

const server = new GraphQLServer({
  typeDefs,
  resolvers
});

server.start(serverProps => {
  console.log("Server is starting");
  console.info(serverProps);
});
