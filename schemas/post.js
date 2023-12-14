const { GraphQLError } = require("graphql");
const Post = require("../models/post");

const multer  = require('multer')
const storage = multer.memoryStorage()
const upload = multer({ storage })

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
    status: String
    photo: [Upload]
    createdAt: String
    updatedAt: String
  }

  scalar Upload

  type Query {
    user: User
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
      photo: [Upload]
      long: Float
      lat: Float
    ): Post
  }
`;

const resolvers = {
  Query: {
    user: async (_, __, { authentication }) => {
      try {
        // const { authorId } = await authentication();
        const authorId = 1;
        const user = await Post.getById({ id: new ObjectId(authorId) });

        return user;
      } catch (err) {
        throw err;
      }
    },
  },

  Mutation: {
    addPost: async(_, args, { authentication, authorization }) => {
      upload.single("image")

      try {
        const { name, size, age, breed, gender, color, description, status, photo, long, lat } = args
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

        if (!status) { 
          throw new GraphQLError("Status is required", {
            extensions: { code: "Bad Request"}
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