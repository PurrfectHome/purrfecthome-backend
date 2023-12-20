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
        return convo;
    }

    static async getAll(userId) {
        const pipeline = [
            {
                $match: {
                    $or: [
                        { user1: new ObjectId(userId) },
                        { user2: new ObjectId(userId) }
                    ], 
                }
            },
            {
                $lookup: {
                    from: "Users",
                    localField: "user1",
                    foreignField: "_id",
                    as: "user1Profile"
                }
            },
            {
                $lookup: {
                    from: "Users",
                    localField: "user2",
                    foreignField: "_id",
                    as: "user2Profile"
                }
            },
            {
                $unwind: "$user1Profile"
            },
            {
                $unwind: "$user2Profile"
            },
            {
                $lookup: {
                    from: "Messages",
                    localField: "_id",
                    foreignField: "ConversationID",
                    as: "messages"
                }
            },
            {
                $addFields: {
                    user1: "$user1Profile",
                    user2: "$user2Profile"
                }
            },
            {
                $group: {
                    _id: "$_id",
                    user1: { $first: "$user1" },
                    user2: { $first: "$user2" },
                    Messages: { $first: "$messages" }
                }
            },
            // {
            //     $sort : { 'message.createdAt' : -1 }
            // },
            {
                $project: {
                    _id: 1,
                    user1: 1,
                    user2: 1,
                    Messages: 1
                }
            }
        ];
    
        const convos = await getDB().collection("Conversations").aggregate(pipeline).toArray();
  
        return convos;
    }

    static async getById(convoId) {
        const Convos = getDB().collection("Conversations")
        const pipeline = [
            {
                $match: { _id: new ObjectId(convoId) }
            },
            {
                $lookup: {
                    from: "Messages",
                    localField: "_id",
                    foreignField: "ConversationID",
                    as: "Messages"
                }
            },
            {
                $lookup: {
                    from: "Users",
                    localField: "user1",
                    foreignField: "_id",
                    as: "user1Profile"
                }
            },
            {
                $lookup: {
                    from: "Users",
                    localField: "user2",
                    foreignField: "_id",
                    as: "user2Profile"
                },
            },
            {
                $unwind: "$user2Profile",
            },
            {
                $unwind: "$user1Profile",
            },
            {
                $addFields: {
                    user1: "$user1Profile",
                    user2: "$user2Profile"
                }
            },
            // {
            //     $unwind: "$user2Profile",
            // },
            // {
            //     $unwind: "$user1Profile",
            // },
            {
                $group: {
                    _id: "$_id",
                    user1: { $first: "$user1" },
                    user2: { $first: "$user2" },
                    Messages: { $first: "$Messages" }
                },
            },
            {
                $project: {
                    _id: 1,
                    user1: 1,
                    user2: 1,
                    Messages: 1,
                }
            }
        ]
        const convo = await Convos.aggregate(pipeline).toArray();
     
        return convo[0]
    }
}

module.exports = Conversation