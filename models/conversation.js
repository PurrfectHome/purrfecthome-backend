const { getDB } = require("../config/mongo");

class Conversation {
    static async create({ userId, UserId2 }) {
        const newConvo = {
            user1: userId,
            user2: UserId2,
            createdAt: new Date(),
            updatedAt: new Date()
        }

        await getDB.collection("Conversations").insertOne(newConvo)
        return newConvo
    }

    static async getByUser({ userId, UserId2 }) {
        const query = {
            user1: userId,
            user2: UserId2
        }

        const convo = getDB().collection("Conversations").findOne(query)
        return convo
    }
}

module.exports = Conversation