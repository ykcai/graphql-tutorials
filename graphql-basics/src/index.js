import { GraphQLServer } from "graphql-yoga";
import { Agent } from "https";
import { getPackedSettings } from "http2";

// Scalar Types - String, Boolean, Int, Float, ID (unqiue)

// Type defintions (schema)
const typeDefs = `
    type Query {
        hello: String!
        name: String!
        location: String!
        bio: String!
        id: ID!
        age: Int!
        gpa: Float
        employed: Boolean!
        title: String!
        price: Float!
        releaseYear: Int
        rating: Float
        inStock: Boolean
    }
`;

// Resolvers
const resolvers = {
  Query: {
    title() {
      return "Michael Cai";
    },
    price() {
      return "123.02";
    },
    releaseYear() {
      return null;
    },
    rating() {
      return "3.55";
    },
    inStock() {
      return false;
    },
    hello() {
      return "This is my first query!";
    },
    name() {
      return "Michael Cai";
    },
    id() {
      return "abc123";
    },
    age() {
      return 22;
    },
    employed() {
      return true;
    },
    gpa() {
      return null;
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
