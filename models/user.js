const { getDB } = require("../config/mongo");
const { hashPassword } = require("../helpers/bcryptjs");

class User {
      static async register(fullname, username, email, password, longitude, latitude) {
        const newUser = await getDB().collection("Users").insertOne({
            fullname,
            username, 
            email, 
            password: hashPassword(password), 
            longitude, 
            latitude,
            createdAt: new Date(),
            updatedAt: new Date() 
        })
        console.log(newUser)
        return newUser
    }
    static async getByUsername({ username }) {
        const Users = getDB().collection("users");
        const user = await Users.findOne({ username });

        return user;
    }

    static async getByEmail({ email }) {
        const Users = getDB().collection("users");
        const user = await Users.findOne({ email });

        return user;
    }

    static async getById({ id }) {
        const Users = getDB().collection("users");
        const user = await Users.aggregate([
            {
                $match: { _id: id }
            },
            {
                $lookup:
                {
                    from: "follows",
                    localField: "_id",
                    foreignField: "followerId",
                    as: "followers"
                }
            },
            {
                $lookup:
                {
                    from: "follows",
                    localField: "_id",
                    foreignField: "followingId",
                    as: "followings"
                }
            },
            {
                $lookup:
                {
                    from: "users",
                    localField: "followers.followingId",
                    foreignField: "_id",
                    as: "followings"
                }
            },
            {
                $lookup:
                {
                    from: "users",
                    localField: "followings.followerId",
                    foreignField: "_id",
                    as: "followers"
                }
            },
            {
                $lookup:
                {
                    from: "posts",
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
}

module.exports = User