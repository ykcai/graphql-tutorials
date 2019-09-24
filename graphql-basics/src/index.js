import { GraphQLServer } from "graphql-yoga";

// Scalar Types - String, Boolean, Int, Float, ID (unqiue)

// Type defintions (schema)
const typeDefs = `
    type Query {
        hello: String!
        name: String!
        location: String!
        bio: String!
    }
`;

// Resolvers
const resolvers = {
  Query: {
    hello() {
      return "This is my first query!";
    },
    name() {
      return "Michael Cai";
    }
  }
};

const server = new GraphQLServer({
  typeDefs: typeDefs,
  resolvers: resolvers
});

server.start(serverProps => {
  console.log(`Server is starting`);
  console.info(serverProps);
});
