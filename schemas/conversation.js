const { GraphQLError } = require("graphql");
const Conversation = require("../models/conversation");

const typeDefs = `#graphql
    type userRoom {
        _id: ID,
        fullname: String,
        username: String,
        email: String,
        password: String,
        long: Float,
        lat: Float,
        accountType: String,
        createdAt: String,
        updatedAt: String,
        avatar: String,
    }

    type Messages {
        _id: ID,
        message: String,
        ConversationID: ID,
        User1: ID,
        createdAt: String,
        updatedAt: String,
    }

  type Conversation {
    _id: ID
    user1: userRoom
    user2: userRoom
    Messages: [Messages],
  }

  type RoomChat {
    Conversation: [Conversation],
    UserLoggedIn: String
  }
  
  
  type ConvoIdRes {
    Conversation: Conversation,
    UserLoggedIn: String
  }

  type Query {
    convosByUser: RoomChat
    convoById(convoId: String): ConvoIdRes
  }

  type Mutation {
    addConvo(
        UserId2: ID
    ): ConvoResponse
  }

  type ConvoResponse {
    message: String
    code: String,
    data: String
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
             
                return { Conversation: convos, UserLoggedIn: userId}
            } catch (err) {
                console.log(err);
                throw err
            }
        },

        convoById: async (_, args, { authentication }) => {
            const { userId } = await authentication()
            try {
                const { convoId } = args
                const convo = await Conversation.getById(convoId)
                
                return { Conversation: convo, UserLoggedIn: userId}
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
                    });
                }

                if (userId === UserId2) {
                    throw new GraphQLError("Cannot use the same IDs", {
                        extensions: { code: "Bad Request" }
                    });
                }

                const convo = await Conversation.getByUser(userId, UserId2);

                if (convo) {
                    throw new GraphQLError(`${convo._id}`, {
                        extensions: { code: "Bad Request" }
                    });
                }

                const newConvo = await Conversation.create(userId, UserId2);
                return { message: `added new conversation with id: ${newConvo._id}`, code: "Success", data: `${newConvo._id}` };
                 
            } catch(err) {
                throw err
            }
        }
    }
}

module.exports = { typeDefs, resolvers }