const { getDB } = require("../config/mongo")
const { hashPassword } = require("../helpers/bcryptjs")

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
}

module.exports = User
