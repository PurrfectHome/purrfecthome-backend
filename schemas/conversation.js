const typeDefs = `#graphql

  type Conversation {
    id: ID
    user1: ID
    user2: ID
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