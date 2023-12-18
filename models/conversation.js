const { ObjectId } = require("mongodb");
const { getDB } = require("../config/mongo");

class Conversation {
    static async create( userId, UserId2 ) {
        const newConvo = {
            user1: new ObjectId(userId),
            user2: new ObjectId(UserId2),
            createdAt: new Date(),
            updatedAt: new Date()
        }

        await getDB().collection("Conversations").insertOne(newConvo)
        return newConvo
    }

    static async getByUser( userId, UserId2 ) {
        const query = {
            $or: [
                { user1: new ObjectId(userId), user2: new ObjectId(UserId2) },
                { user1: new ObjectId(UserId2), user2: new ObjectId(userId) }
            ]
        }

        const convo = getDB().collection("Conversations").findOne(query)
        return convo
    }

    static async getAll(userId) {
        const query = {
            $or: [
                { user1: new ObjectId(userId) },
                { user2: new ObjectId(userId) }
            ]
        };
        const convos = getDB().collection("Conversations").find(query).toArray()

        return convos
    }

    static async getById(convoId) {
        const Convos = getDB().collection("Conversations")
        const convo = await Convos.aggregate([
            {
                $match: { _id: new ObjectId(convoId) }
            },
            {
                $lookup: {
                    from: "Messages",
                    localField: "_id",
                    foreignField: "ConversationID",
                    as: "MessagesByConvo"
                }
            }
        ]).toArray();
        console.log(convo[0])
        return convo[0]
    }
}

module.exports = Conversation