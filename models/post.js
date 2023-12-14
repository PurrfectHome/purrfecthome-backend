const { getDB } = require("../config/mongo");

class Post {
    static async create(name, size, age, breed, gender, color, status, description, photo, long, lat) {
        const newPost = {
            name,
            size, 
            age, 
            breed, 
            gender,
            color,
            status,
            description,
            photo,
            long,
            lat,
            accountType: "regular",
            createdAt: new Date(),
            updatedAt: new Date() 
        }

        const { insertedId } = await getDB().collection("Posts").insertOne(newPost)
        newUser.id = insertedId

        return newUser
    }
}

module.exports = Post