const { GraphQLError } = require("graphql");
const Conversation = require("../models/conversation");

const typeDefs = `#graphql

  type Conversation {
    _id: ID
    user1: ID
    user2: ID
    createdAt: String
    updatedAt: String
  }

  type ConvoIdRes {
    _id: ID
    user1: ID
    user2: ID
    createdAt: String
    updatedAt: String
    MessagesByConvo: [Message]
  }

  type Query {
    convosByUser: [Conversation]
    convoById(convoId: String): ConvoIdRes
  }

  type Mutation {
    addConvo(
        UserId2: ID
    ): ConvoResponse
  }

  type ConvoResponse {
    message: String
    code: String
  }


  type Message {
    _id: ID
    message: String
    ConversationID: ID
    User1: ID
    createdAt: String
    updatedAt: String
  }
`;

const resolvers = {
    Query: {
        convosByUser: async (_, __, { authentication }) => {
            try {
                const { userId } = await authentication()
                const convos = await Conversation.getAll(userId)
                console.log(convos)
                return convos
            } catch (err) {
                throw err
            }
        },

        convoById: async (_, args, { authentication }) => {
            await authentication()
            try {
                const { convoId } = args
                const convo = await Conversation.getById(convoId)
                console.log(convo)
                return convo
            } catch(err) {
                throw err
            }
        }
    },

    Mutation: {
        addConvo: async (_, args, { authentication }) => {
            const { userId } = await authentication();

            try {
                const { UserId2 } = args

                if (!UserId2) {
                    throw new GraphQLError("UserId2 is required", {
                      extensions: { code: "Bad Request" }
                    })
                }

                if (userId === UserId2) {
                    throw new GraphQLError("Cannot use the same IDs", {
                        extensions: { code: "Bad Request" }
                    })
                }

                const convo = await Conversation.getByUser(userId, UserId2)
                console.log(convo)
                if (convo) {
                    throw new GraphQLError("Conversation already established", {
                        extensions: { code: "Bad Request" }
                    })
                }

                const newConvo = await Conversation.create(userId, UserId2)
                return { message: `added new conversation with id: ${newConvo._id}`, code: "Success" };
                 
            } catch(err) {
                throw err
            }
        }
    }
}

module.exports = { typeDefs, resolvers }