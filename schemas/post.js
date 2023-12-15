const { GraphQLError } = require("graphql");
const User = require("../models/user");
const { emailFormat, passwordValidation } = require("../helpers/validation");
const { hashPassword, comparePassword } = require("../helpers/bcryptjs");
const { signToken } = require("../helpers/jwt");
const { OAuth2Client } = require('google-auth-library');
const Post = require("../models/post");
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
    AdopterId: ID
    PosterId: ID
    status: String
    statusPrice: String
    createdAt: String
    updatedAt: String
  }

  scalar Upload


  type Query {
    postsByRadius: User
  }

  type UpdateAdopterRes {
    message: String
    code: String
  }

  type Mutation {
    UpdateAdopter(
        AdopterId: ID
        PostId: ID
    ): UpdateAdopterRes
  }
`;

const resolvers = {
  Query: {
    postsByRadius: async (_, { long, lat }, { authentication }) => {
      try {
        const { authorId } = await authentication();

        const user = await Post.getByRadius({ lat, long });

        return user;
      } catch (err) {
        throw err;
      }
    },
  },

  Mutation: {
    UpdateAdopter: async (_, { AdopterId, PostId }, { authentication }) => {
      try {
        await authentication();
        const update = await Post.updateAdopter({ AdopterId, PostId });

        if (update.matchedCount === 0) {
          throw new GraphQLError('Post/Adopter`s data is not found', {
            extensions: { message: "Post/Adopter`s data is not found", code: 'Not Found' },
          });
        };

        return { message: "successfully change status", code: "Success" };
      } catch (error) {
        throw error;
      }
    }
  }
}

module.exports = { typeDefs, resolvers }