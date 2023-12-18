const Conversation = require("../models/conversation");

const typeDefs = `#graphql

  type Conversation {
    _id: ID
    user1: ID
    user2: ID
    createdAt: String
    updatedAt: String
  }

#   type Query {
    
#   }

  type Mutation {
    addConvo(
        UserId2: ID
    ): ConvoResponse
  }

  type ConvoResponse {
    message: String
    code: String
  }
`;

const resolvers = {
    // Query: {

    // },

    Mutation: {
        addConvo: async (_, args, { authentication }) => {
            await authentication();

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

                if (convo) {
                    throw new GraphQLError("Conversation already established", {
                        extensions: { code: "Bad Request" }
                    })
                }

                const newConvo = await Conversation.create(userId, UserId2)
                return { message: `added new conversation with: ${newConvo.user2}`, code: "Success" };
                 
            } catch(err) {
                throw err
            }
        }
    }
}

module.exports = { typeDefs, resolvers }