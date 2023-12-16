const { ObjectId } = require("mongodb");
const { getDB } = require("../config/mongo");

class Post {
    static async getById({ PostId }) {
        const Posts = getDB().collection("Posts");
        const post = await Posts.findOne({ _id: new ObjectId(PostId) });

        return post;
    }

    static async getByPosterId({ PosterId }) {
        const Posts = getDB().collection("Posts");
        const posterPosts = await Posts.find({ _id: new ObjectId(PosterId) }).toArray();

        return posterPosts;
    }

    static async getByAdopterId({ AdopterId }) {
        const Posts = getDB().collection("Posts");
        const adopterPosts = await Posts.find({ _id: new ObjectId(AdopterId) }).toArray();

        return adopterPosts;
    }

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
        const PostsCollection = getDB().collection("Posts");
        const updateAdopter = await PostsCollection.updateOne(
            { _id: new ObjectId(PostId) },
            { $set: { AdopterId: new ObjectId(AdopterId) } }
        );

        return updateAdopter;
    }

    static async delete({ PostId }) {
        const PostsCollection = getDB().collection("Posts");
        const deletePost = await PostsCollection.deleteOne({ _id: new ObjectId(PostId) });

        return deletePost;
    }

    static async create(name, size, age, breed, gender, color, description, information, photo, long, lat, PosterId, statusPrice) {
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
            information,
            photo,
            AdopterId: "",
            PosterId,
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

module.exports = Post;
