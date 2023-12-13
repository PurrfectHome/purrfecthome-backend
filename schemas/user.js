const { GraphQLError } = require("graphql");
const User = require("../models/user");
const { emailFormat, passwordValidation } = require("../helpers/validation");
const { hashPassword } = require("../helpers/bcryptjs");

const typeDefs = `#graphql
  type User {
    id: ID
    fullname: String
    username: String
    email: String
    password: String
    long: Float
    lat: Float
    accountType: String
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
        long: Float
        lat: Float
    ): User
    login(
        username: String
        password: String
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
        const { fullname, username, email, password, long, lat } = args
        if (!fullname) { 
          throw new GraphQLError("Fullname is required", {
            extensions: { code: "Bad Request"}
          })
        }

        if (!email) { 
          throw new GraphQLError("Email is required", {
            extensions: { code: 'Bad Request' }
          })
        }

        if (!password) { 
          throw new GraphQLError("Password is required", {
            extensions: { code: 'Bad Request' }
          })
        }

        if (!username) { 
          throw new GraphQLError("Username is required", {
            extensions: { code: 'Bad Request' }
          })
        }

        if (!long || !lat) {
           throw new GraphQLError("Invalid location data", {
            extensions: { code: "Bad Request" }
           }) 
        }

        let emailExist = await User.getByEmail({ email });
        if (emailExist) {
          throw new GraphQLError('Email has been exist', {
            extensions: { code: 'Bad Request' },
          });
        }

        //validation unique username
        let usernameExist = await User.getByUsername({ username });
        if (usernameExist) {
          throw new GraphQLError('Username has been exist', {
            extensions: { code: 'Bad Request' },
          });
        }

        //validation email format
        const isEmail = emailFormat(email);
        if (!isEmail) {
          throw new GraphQLError('Use a valid Email format', {
            extensions: { code: 'Bad Request' },
          });
        }

        //validation password length
        const isMinLength = passwordValidation(password);
        if (!isMinLength) {
          throw new GraphQLError('Password min 5 characters', {
            extensions: { code: 'Bad Request' },
          });
        }

        const hashedPassword = hashPassword(password);
        const newUser = await User.create( fullname, username, email, hashedPassword, long, lat );
        return newUser

      } catch (err) {
        throw err
      }
    }
  }
}

module.exports = { typeDefs, resolvers }