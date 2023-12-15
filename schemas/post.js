const { GraphQLError } = require("graphql");
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
    status: String
    statusPrice: String
    adopterId: ID
    posterID: ID
    photo: [String]
    createdAt: String
    updatedAt: String
  }

  type Query {
    post: Post
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
  }
`;

const resolvers = {
  Query: {
    post: async (_, __, { authentication }) => {
      try {
        // const { authorId } = await authentication();
        const authorId = 1;
        const post = await Post.getById({ id: new ObjectId(authorId) });

        return post;
      } catch (err) {
        throw err;
      }
    },
  },

  Mutation: {
    addPost: async(_, args, { authentication, authorization }) => {
      upload.single("image")

      try {
        const { name, size, age, breed, gender, color, description, statusPrice, photo, long, lat } = args
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
        
        const newPost = await Post.create(name, size, age, breed, gender, color, description, statusPrice, photo, long, lat)
        return newPost
        
      } catch(err) {
        throw err
      }
    }
  }
}

module.exports = { typeDefs, resolvers }