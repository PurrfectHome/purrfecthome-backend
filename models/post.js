const { ObjectId } = require("mongodb");
const { getDB } = require("../config/mongo");

class Post {
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

    static async updateAdopter({ AdopterId, PostId }) {
        const postsCollection = getDB().collection("Posts");
        const updateAdopter = await postsCollection.updateOne(
            { _id: new ObjectId(PostId) },
            { $set: { AdopterId: new ObjectId(AdopterId) } } 
        );

        return updateAdopter;
    }
}

module.exports = Post;