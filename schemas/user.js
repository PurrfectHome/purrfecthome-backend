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
  
  type Post {
    id: ID
    fullname: String
    username: String
    createdAt: String
    updatedAt: String
  }

  type Query {
    
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

    },

    Mutation: {
        register: async(_, args) => {
            try {
                const { fullname, username, email, password, longitude, latitude } = args
                if(!fullname) { throw new GraphQLError("Fullname is required")}
                if(!username) { throw new GraphQLError("Username is required")}
                if(!email) { throw new GraphQLError("Email is required")}
                if(!password) { throw new GraphQLError("Password is required")}
                if(!email) { throw new GraphQLError("Email is required")}
                if(!longitude || !latitude) { throw new GraphQLError("Invalid location data")}
            } catch(err) {
                throw err
            }
        }
    }
}

module.exports = { typeDefs, resolvers }