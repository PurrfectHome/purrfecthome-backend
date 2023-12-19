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
        let user = await Users.aggregate([
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
                $unwind: { path: "$Release", preserveNullAndEmptyArrays: true },
            },
            {
                $lookup: {
                    from: "Users",
                    let: { adopterId: "$Release.AdopterId" },
                    pipeline: [
                        {
                            $match: {
                                $expr: { $eq: ["$_id", "$$adopterId"] }
                            }
                        },
                        {
                            $project: {
                                password: 0,
                            }
                        }
                    ],
                    as: "Release.adopter"
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
            {
                $unwind: { path: "$Adoption", preserveNullAndEmptyArrays: true },
            },
            {
                $group: {
                    _id: "$_id",
                    fullname: { $first: "$fullname" },
                    username: { $first: "$username" },
                    email: { $first: "$email" },
                    Release: { $addToSet: "$Release" },
                    Adoption: { $addToSet: "$Adoption" },
                    accountType: { $first: "$accountType" },
                    createdAt: { $first: "$createdAt" },
                    updatedAt: { $first: "$updatedAt" }
                }
            },
            {
                $project: {
                    "_id": 1,
                    "fullname": 1,
                    "username": 1,
                    "email": 1,
                    "Release": {
                        $map: {
                            input: "$Release",
                            as: "release",
                            in: {
                                _id: "$$release._id",
                                name: "$$release.name",
                                size: "$$release.size",
                                age: "$$release.age",
                                breed: "$$release.breed",
                                gender: "$$release.gender",
                                color: "$$release.color",
                                description: "$$release.description",
                                loc: "$$release.loc",
                                AdopterId: "$$release.AdopterId",
                                PosterId: "$$release.PosterId",
                                InformationId: "$$release.InformationId",
                                status: "$$release.status",
                                statusPrice: "$$release.statusPrice",
                                photo: "$$release.photo",
                                createdAt: "$$release.createdAt",
                                updatedAt: "$$release.updatedAt",
                                adopter: { $arrayElemAt: ["$$release.adopter", 0] }
                            }
                        }
                    },
                    "Adoption": {
                        $map: {
                            input: "$Adoption",
                            as: "adoption",
                            in: {
                                _id: "$$adoption._id",
                                name: "$$adoption.name",
                                size: "$$adoption.size",
                                age: "$$adoption.age",
                                breed: "$$adoption.breed",
                                gender: "$$adoption.gender",
                                color: "$$adoption.color",
                                description: "$$adoption.description",
                                loc: "$$adoption.loc",
                                AdopterId: "$$adoption.AdopterId",
                                PosterId: "$$adoption.PosterId",
                                InformationId: "$$adoption.InformationId",
                                status: "$$adoption.status",
                                statusPrice: "$$adoption.statusPrice",
                                photo: "$$adoption.photo",
                                createdAt: "$$adoption.createdAt",
                                updatedAt: "$$adoption.updatedAt",
                            }
                        }
                    },
                    "accountType": 1,
                    "createdAt": 1,
                    "updatedAt": 1,
                }
            },
        ]).toArray();
    
        if (user[0]) {
            if (!user[0].Release[0]._id) {
                user[0].Release = [];
            }
        }
        
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