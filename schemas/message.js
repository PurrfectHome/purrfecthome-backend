const Message = require("../models/message");

const typeDefs = `#graphql
  type Message {
    _id: ID
    message: String
    ConversationID: ID
    User1: ID
    createdAt: String
    updatedAt: String
  }

  type Mutation {
    addMsg(
        message: String
        ConversationID: ID
    ): MsgResponse
  }

  type MsgResponse {
    message: String
    code: String
  }

`;

const resolvers = {
    Query: {

    },

    Mutation: {
        addMsg: async (_, args, { authentication }) => {
            await authentication();

            try {
                const { message, ConversationID } = args
                if (!ConversationID) {
                    throw new GraphQLError("ConversationID is required", {
                      extensions: { code: "Bad Request" }
                    })
                  }

                if (!message.length) {
                    throw new GraphQLError("Message requires at least 1 characters", {
                      extensions: { code: "Bad Request" }
                    })
                  }

                const newMsg = await Message.create(message, ConversationID, userId)
                return { message: `successfully inserted new message`, code: "Success" };
            } catch(err) {
                throw err
            }
        }
    }
}

module.exports = { typeDefs, resolvers }