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

    static async getByRadius({ long, lat, breed }) {
        let postsCollection = getDB().collection("Posts");
    
        // Create the 2dsphere index separately and wait for it to complete
        await postsCollection.createIndex({ "loc": "2dsphere" });
    
        const query = {
            loc: {
                $near: {
                    $geometry: {
                        type: "Point",
                        coordinates: [long, lat]
                    },
                    $maxDistance: 70000
                },
            }
        };
    
        if (breed) {
            query.breed = breed;
        }
    
        const nearbyPosts = await postsCollection
            .find(query)
            .toArray();
    
        console.log(nearbyPosts, lat, long, query.loc.$near.$geometry);
    
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

    static async create(name, size, age, breed, gender, color, description, InformationId, photo, long, lat, PosterId, statusPrice) {
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
            InformationId,
            photo,
            AdopterId: "",
            PosterId: new ObjectId(PosterId),
            loc:  {
                type: String,
                coordinates: [long, lat]
            },
            accountType: "regular",
            createdAt: new Date(),
            updatedAt: new Date()
        }

        await getDB().collection("Posts").insertOne(newPost);

        return newPost;
    }

    static async edit(PostId, name, size, age, breed, gender, color, statusPrice, description, photo, InformationId) {
        const filter = { _id: new ObjectId(PostId) };
        const update = {
            updatedAt: new Date()
        };

        if (name) update.name = name
        if (size) update.size = size;
        if (age) update.age = age;
        if (breed) update.breed = breed;
        if (gender) update.gender = gender;
        if (color) update.color = color;
        if (statusPrice) update.statusPrice = statusPrice;
        if (description) update.description = description;
        if (photo) update.photo = photo;
        if (InformationId) update.InformationId = new ObjectId(InformationId);
        // if (long) update.long = long;
        // if (lat) update.lat = lat;

        const options = { returnDocument: 'after' }; // This option returns the updated document

        const updatedPost = await getDB().collection('Posts').findOneAndUpdate(filter, { $set: update }, options);

        return updatedPost;
    }
}

module.exports = Post;
