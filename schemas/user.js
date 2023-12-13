const { GraphQLError } = require("graphql");
const User = require("../models/user");
const { emailFormat, passwordValidation } = require("../helpers/validation");
const { hashPassword, comparePassword } = require("../helpers/bcryptjs");
const { signToken } = require("../helpers/jwt");
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client();


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
    loginGoogle(
        gToken: String
        lat: String
        long: String
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
    },

    login: async (_, { username, password }) => {
      try {
        if (!username || username == '') {
          throw new GraphQLError('Username is required', {
            extensions: { code: 'Bad Request' },
          });
        }

        if (!password || password == '') {
          throw new GraphQLError('Password is required', {
            extensions: { code: 'Bad Request' },
          });
        }
        const user = await User.getByUsername({ username });

        if (!user) {
          throw new GraphQLError('User is not exist', {
            extensions: { code: 'Not Found' },
          });
        }

        const isMatch = comparePassword(password, user.password);
        if (!isMatch) {
          throw new GraphQLError('Invalid username/password', {
            extensions: { code: 'Unauthenticated' },
          });
        }

        return { accessToken: signToken({ userId: user._id }) };
      } catch (err) {
        throw err;
      }
    },


    loginGoogle: async (_, { gToken, lat, long }) => {
      try {
        const ticket = await client.verifyIdToken({
          idToken: gToken,
          audience: process.env.G_CLIENT,
        });

        const payload = ticket.getPayload();
        const [user, newUser] = await User.findOrCreate({
          where: {
            $or: [
              { email: payload.email },
              { username: payload.username, }
            ]

          },
          defaults: {
            fullname: payload.email,
            email: payload.email,
            username: payload.email,
            password: String(Math.random() * 5),
            long: long,
            lat: lat,
            accountType: 'google',
          },
        });

        if (newUser) await User.create({ userId: user.id, name: user.username });
        fullname, username, email, password, longitude, latitude
        return { accessToken: signToken({ userId: user.id }) };
      } catch (error) {
        throw new GraphQLError('Google login failed', {
          extensions: { code: 'Internal Server Error' },
        });
      }
    },
  }
}

module.exports = { typeDefs, resolvers }