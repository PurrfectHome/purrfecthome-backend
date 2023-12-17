const { GraphQLError } = require("graphql");
const User = require("../models/user");
const { emailFormat, passwordValidation } = require("../helpers/validation");
const { hashPassword, comparePassword } = require("../helpers/bcryptjs");
const { signToken } = require("../helpers/jwt");
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client();

const typeDefs = `#graphql
  type User {
    _id: ID
    fullname: String
    username: String
    email: String
    password: String
    accountType: String
    createdAt: String
    updatedAt: String
  }

  type UserRegister {
    message: String
    code: String
  }

  type UserLogin {
    accessToken: String
  }

  type Query {
    usersById(UserId: String): User
    usersProfile: User
    usersByUsername(username: String): [User]
  }

  type Mutation {
    register(
        fullname: String
        username: String
        email: String
        password: String
    ): UserRegister
    login(
        username: String
        password: String
    ): UserLogin
    loginGoogle(
        gToken: String
        password: String
    ): User
  }
`;

const resolvers = {
  Query: {
    usersByUsername: async (_, { username }, { authentication }) => {
      try {
        await authentication();
        const users = await User.getByUsername({ username });

        return users;
      } catch (err) {
        throw err;
      }
    },

    usersById: async (_, { UserId }, { authentication }) => {
      try {
        await authentication();
        const user = await User.getById({ id: UserId });

        return user;
      } catch (err) {
        throw err;
      }
    },

    usersProfile: async (_, __, { authentication }) => {
      try {
        const { userId } = await authentication();
        const user = await User.getById({ id: userId });

        return user;
      } catch (err) {
        throw err;
      }
    },
  },

  Mutation: {
    register: async (_, args) => {
      try {
        const { fullname, username, email, password } = args
        if (!fullname) {
          throw new GraphQLError("Fullname is required", {
            extensions: { code: "Bad Request" }
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
        const newUser = await User.create(fullname, username, email, hashedPassword);

        return { message: `successfully registered as ${newUser.username}`, code: "Success" };
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

        const user = await User.findByUsername({ username });

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

        return { accessToken: signToken({ UserId: user._id }) };
      } catch (err) {
        console.log(err);
        throw err;
      }
    },

    loginGoogle: async (_, { gToken }) => {
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
            accountType: 'google',
          },
        });

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