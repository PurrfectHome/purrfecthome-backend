const { ObjectId } = require("mongodb");
const { getDB } = require("../config/mongo");

class Message {
    static async create( message, ConversationID, userId ) {
        const newMsg = {
            message,
            ConversationID,
            User1: new ObjectId(userId),
            createdAt: new Date(),
            updatedAt: new Date()
        }

        await getDB().collection("Messages").insertOne(newMsg)
        return newMsg
    }
}

module.exports = Message