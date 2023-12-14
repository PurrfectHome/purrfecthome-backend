const { GraphQLError } = require("graphql");
const User = require("../models/user");
const { emailFormat, passwordValidation } = require("../helpers/validation");
const { hashPassword, comparePassword } = require("../helpers/bcryptjs");
const { signToken } = require("../helpers/jwt");
const { OAuth2Client } = require('google-auth-library');
const Post2 = require("../models/post2");
const client = new OAuth2Client();


const typeDefs = `#graphql
  type Post {
    id: ID
    name: String
    size: String
    age: String
    breed: String
    gender: String
    color: String
    description: String
    photo: [Upload]
    long: Float
    lat: Float
    createdAt: String
    updatedAt: String
  }

  scalar Upload;

  type Query {
    posts: User
  }

 
`;

const resolvers = {
  Query: {
    post: async (_, {long, lat}, { authentication }) => {
      try {
        const { authorId } = await authentication();

        const user = await Post2.getByRadius({ lat, long });

        return user;
      } catch (err) {
        throw err;
      }
    },
  },
}

module.exports = { typeDefs, resolvers }