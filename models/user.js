const { ObjectId } = require("mongodb");
const { getDB } = require("../config/mongo");

class User {
    static async create(fullname, username, email, hashedPassword, long, lat) {
        const newUser = {
            fullname,
            username,
            email,
            password: hashedPassword,
            long,
            lat,
            accountType: "regular",
            createdAt: new Date(),
            updatedAt: new Date()
        }

        const { insertedId } = await getDB().collection("Users").insertOne(newUser);
        newUser.id = insertedId;
        delete newUser.password;

        return newUser;
    }

    static async getAll() {
        const Users = getDB().collection("Users");
        const user = await Users.find();

        return user;
    }

    static async getByUsername({ username }) {
        const Users = getDB().collection("Users");
        const user = await Users.findOne({ username });

        return user;
    }

    static async getByEmail({ email }) {
        const Users = getDB().collection("Users");
        const user = await Users.findOne({ email });

        return user;
    }

    static async getById({ id }) {
        const Users = getDB().collection("Users");
        const user = await Users.aggregate([
            {
                $match: { _id: id }
            },
            {
                $lookup:
                {
                    from: "Follows",
                    localField: "_id",
                    foreignField: "followerId",
                    as: "followers"
                }
            },
            {
                $lookup:
                {
                    from: "Follows",
                    localField: "_id",
                    foreignField: "followingId",
                    as: "followings"
                }
            },
            {
                $lookup:
                {
                    from: "Users",
                    localField: "followers.followingId",
                    foreignField: "_id",
                    as: "followings"
                }
            },
            {
                $lookup:
                {
                    from: "Users",
                    localField: "followings.followerId",
                    foreignField: "_id",
                    as: "followers"
                }
            },
            {
                $lookup:
                {
                    from: "Posts",
                    localField: "_id",
                    foreignField: "authorId",
                    as: "posts"
                }
            },
            {
                $project: {
                    password: 0,
                }
            }
        ]).toArray();

        return user[0];
    }

    static async patchCurrentLoc({ currentLoc, userId }) {
        await getDB().collection("Users").updateOne(
            { _id: new ObjectId(userId) },
            { $set: { currentLoc } }
        );
    }   
}

module.exports = User;