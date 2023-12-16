const { getDB } = require("../config/mongo");

class Information {
    static async getByBreed(breed) {
        const Users = getDB().collection("Informations");
        const user = await Users.findOne({ breed });

        return user;
    }

    static async create(breed, description) {
        const newInformation = {
            breed,
            description,
            createdAt: new Date(),
            updatedAt: new Date()
        }

        await getDB().collection("Informations").insertOne(newInformation);
        // newInformation.id = insertedId;

        return newInformation;
    }
}

module.exports = Information