const { GraphQLError } = require("graphql");
const User = require("../models/user");

const typeDefs = `#graphql
  type User {
    id: ID
    fullname: String
    username: String
    email: String
    password: String
    long: Float
    lat: Float
    createdAt: String
    updatedAt: String
  }

  type Query {
    user: User
  }

  type Mutation {
    register(
        fullname: String
        username: String
        email: String
        password: String
        longitude: Float
        latitude: Float
    ): User
  }
`;

const resolvers = {
  Query: {
    user: async (_, __, { authentication }) => {
      try {
        // const { authorId } = await authentication();
        const authorId = 1;
        const user = await User.getById({ id: new ObjectId(authorId) });

        return user;
      } catch (err) {
        throw err;
      }
    },
  },

  Mutation: {
    register: async (_, args) => {
      try {
        const { fullname, username, email, password, longitude, latitude } = args
        if (!fullname) { throw new GraphQLError("Fullname is required") }
        if (!username) { throw new GraphQLError("Username is required") }
        if (!email) { throw new GraphQLError("Email is required") }
        if (!password) { throw new GraphQLError("Password is required") }
        if (!email) { throw new GraphQLError("Email is required") }
        if (!longitude || !latitude) { throw new GraphQLError("Invalid location data") }
      } catch (err) {
        throw err
      }
    }
  }
}

module.exports = { typeDefs, resolvers }