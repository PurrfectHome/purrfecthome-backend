const typeDefs = `#graphql

  type User {
    id: ID
    fullname: String
    username: String
    email: String
    password: String
    provinceId: ID
    cityId: ID
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