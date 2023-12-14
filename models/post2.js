const { ObjectId } = require("mongodb");
const { getDB } = require("../config/mongo");

class Post2 {
    static async getByRadius({ long, lat }) {
        const postsCollection = getDB().collection("Posts");
        const nearbyPosts = await postsCollection.find({
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [long, lat],
                    },
                    $maxDistance: 70000
                },
            },
        }).toArray();

        return nearbyPosts;
    }
}

module.exports = Post2;