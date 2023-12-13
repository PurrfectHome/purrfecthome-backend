const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const { typeDefs: userTypeDefs, resolvers: userResolvers } = require("./schemas/user")
const { typeDefs: messageTypeDefs, resolvers: messageResolvers } = require("./schemas/message")
const { typeDefs: conversationTypeDefs, resolvers: conversationResolvers } = require("./schemas/conversation")

const server = new ApolloServer({
    typeDefs: [userTypeDefs, messageTypeDefs, conversationTypeDefs],
    resolvers: [userResolvers, messageResolvers, conversationResolvers]
  });

startStandaloneServer(server, {
    listen: { port: 4000 },
}).then(({ url }) => {
    console.log(`🚀 Server ready at: ${url}`);
})



  