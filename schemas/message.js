const typeDefs = `#graphql

  type Conversation {
    id: ID
    message: ID
    conversationID: ID
    user1: ID
    createdAt: String
    updatedAt: String
  }

  type Query {
    
  }

  type Mutation {

  }
`;

const resolvers = {
    Query: {

    },

    Mutation: {

    }
}

module.exports = { typeDefs, resolvers }