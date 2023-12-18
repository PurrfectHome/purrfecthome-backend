if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const { typeDefs: userTypeDefs, resolvers: userResolvers } = require("./schemas/user")
const { typeDefs: postTypeDefs, resolvers: postResolvers } = require("./schemas/post")
const { typeDefs: messageTypeDefs, resolvers: messageResolvers } = require("./schemas/message")
const { typeDefs: conversationTypeDefs, resolvers: conversationResolvers } = require("./schemas/conversation")
const { connect } = require('./config/mongo');
const { authentication, authorization } = require('./middlewares/authentication');

const server = new ApolloServer({
    typeDefs: [userTypeDefs, postTypeDefs, messageTypeDefs, conversationTypeDefs],
    resolvers: [userResolvers, postResolvers, messageResolvers, conversationResolvers]
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests

connect().then(() => {
    return startStandaloneServer(server, {
        listen: { port: process.env.port || 3000 },
        context: ({ req }) => {
            return {
                authentication: async () => await authentication(req),
                authorization: async () => await authorization(req)
            }
        }
    })
}).then(({ url }) => {
    console.log(`🚀  Server ready at: ${url}`);
});