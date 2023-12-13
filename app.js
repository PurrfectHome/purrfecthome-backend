const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const { typeDefs: userTypeDefs, resolvers: userResolvers } = require("./schemas/user")
const { typeDefs: messageTypeDefs, resolvers: messageResolvers } = require("./schemas/message")
const { typeDefs: conversationTypeDefs, resolvers: conversationResolvers } = require("./schemas/conversation")

const server = new ApolloServer({
    typeDefs: [userTypeDefs, messageTypeDefs, conversationTypeDefs],
    resolvers: [userResolvers, messageResolvers, conversationResolvers],
  });
  
  // Passing an ApolloServer instance to the `startStandaloneServer` function:
  //  1. creates an Express app
  //  2. installs your ApolloServer instance as middleware
  //  3. prepares your app to handle incoming requests

startStandaloneServer(server, {
    listen: { port: 4000 },
});
  
  console.log(`🚀  Server ready at: ${url}`);