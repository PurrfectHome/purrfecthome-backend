const { getDB } = require("../config/mongo");

class Post {
    static async create(name, size, age, breed, gender, color, statusPrice, description, photo, long, lat) {
        const newPost = {
            name,
            size, 
            age, 
            breed, 
            gender,
            color,
            status: "available",
            statusPrice,
            description,
            photo,
            adopterId: "",
            posterId,
            long,
            lat,
            accountType: "regular",
            createdAt: new Date(),
            updatedAt: new Date() 
        }

        const { insertedId } = await getDB().collection("Posts").insertOne(newPost)
        newPost.id = insertedId

        return newPost
    }
}

module.exports = Post