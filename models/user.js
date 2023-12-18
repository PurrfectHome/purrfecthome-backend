const { ObjectId } = require("mongodb");
const { getDB } = require("../config/mongo");

class User {
    static async create(fullname, username, email, hashedPassword) {
        const newUser = {
            fullname,
            username,
            email,
            password: hashedPassword,
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

    static async findByUsername({ username }) {
        const Users = getDB().collection("Users");
        const user = await Users.findOne({ username });

        return user;
    }

    static async getByUsername({ username }) {
        const Users = getDB().collection("Users");
        const users = await Users.find({
            $or: [
                { username: { $regex: new RegExp(username, 'i') } }
            ]
        }, {
            projection: { password: 0 }
        }).toArray();

        return users;
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
                $match: { _id: new ObjectId(id) }
            },
            {
                $project: {
                    password: 0,
                }
            },
            {
                $lookup: {
                    from: "Posts",
                    localField: "_id",
                    foreignField: "PosterId",
                    as: "Release"
                }
            },
            {
                $lookup: {
                    from: "Posts",
                    localField: "_id",
                    foreignField: "AdopterId",
                    as: "Adoption"
                }
            },
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