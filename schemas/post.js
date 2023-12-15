const { GraphQLError } = require("graphql");
const User = require("../models/user");
const { emailFormat, passwordValidation } = require("../helpers/validation");
const { hashPassword, comparePassword } = require("../helpers/bcryptjs");
const { signToken } = require("../helpers/jwt");
const { OAuth2Client } = require('google-auth-library');
const Post = require("../models/post");
const client = new OAuth2Client();
const Post = require("../models/post");

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
    long: Float
    lat: Float
    AdopterId: ID
    PosterId: ID
    status: String
    statusPrice: String
    photo: [String]
    createdAt: String
    updatedAt: String
  }

  type Query {
    postsByRadius: User
  }

  type UpdateAdopterRes {
    message: String
    code: String
  }

  type Mutation {
    addPost(
      name: String
      size: String
      age: String
      breed: String
      gender: String
      color: String
      description: String
      status: String
      statusPrice: String
      adopterId: ID
      posterId: ID
      photo: [String]
      long: Float
      lat: Float
    ): Post
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
        const posts = await Post.getByRadius({ lat, long });
        return posts;
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
    },
    addPost: async(_, args, { authentication, authorization }) => {
      upload.single("image")

      try {
        const { name, size, age, breed, gender, color, description, adopterId, statusPrice, photo, long, lat } = args
        if (!name) { 
          throw new GraphQLError("Name is required", {
            extensions: { code: "Bad Request"}
          })
        }

        if (!size) { 
          throw new GraphQLError("Size is required", {
            extensions: { code: "Bad Request"}
          })
        }

        if (!breed) { 
          throw new GraphQLError("Breed is required", {
            extensions: { code: "Bad Request"}
          })
        }

        if (!age) { 
          throw new GraphQLError("Age is required", {
            extensions: { code: "Bad Request"}
          })
        }

        if (!gender) { 
          throw new GraphQLError("Gender is required", {
            extensions: { code: "Bad Request"}
          })
        }

        if (!color) { 
          throw new GraphQLError("Color is required", {
            extensions: { code: "Bad Request"}
          })
        }
        
        if (!long || !lat) {
          throw new GraphQLError("Location is required", {
           extensions: { code: "Bad Request" }
          }) 
       }

        if(!statusPrice) {
          throw new GraphQLError("Please select a price status", {
            extensions: { code: "Bad Request" }
           }) 
        }

        if (!photo.length) {
          throw new GraphQLError("Image is required", {
           extensions: { code: "Bad Request" }
          }) 
       }
        
        const newPost = await Post.create(name, size, age, breed, gender, color, description, status, photo, long, lat)
        return newPost
        
      } catch(err) {
        throw err
      }
    }
  }
}

module.exports = { typeDefs, resolvers }