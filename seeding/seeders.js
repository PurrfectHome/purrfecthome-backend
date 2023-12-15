if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}


const { MongoClient, ObjectId } = require("mongodb");
const client = new MongoClient(process.env.DATABASE_URI, { useNewUrlParser: true, useUnifiedTopology: true });
let { usersSeed, postsSeed } = require('./datas');
const { hashPassword } = require('../helpers/bcryptjs');

async function usersSeeding() {
    usersSeed = usersSeed.map(el => {
        el.createdAt = el.updatedAt = new Date();
        el.password = hashPassword(el.password);

        return el;
    });

    try {
        await client.connect();
        const db = client.db(process.env.DATABASE_NAME);

        const usersCollection = db.collection("Users");
        await usersCollection.insertMany(usersSeed);

        console.log("Data users seeded successfully!");
    } finally {
        await client.close();
    }
}

async function postsSeeding() {
    try {
        await client.connect();
        const db = client.db(process.env.DATABASE_NAME);

        const usersCollection = db.collection("Users");
        const users = await usersCollection.find().toArray();

        postsSeed = postsSeed.map(el => {
            const ranIdx1 = Math.floor(Math.random() * 10);
            const ranIdx2 = Math.floor(Math.random() * 10);
            el.PosterId = new ObjectId(users[ranIdx1]._id);
            el.createdAt = el.updatedAt = new Date();
            if ( ranIdx2 < 2) el.AdopterId = new ObjectId(users[ranIdx2]._id);
            
            return el;
        });

        const postsCollection = db.collection("Posts");
        await postsCollection.insertMany(postsSeed);

        console.log("Data posts seeded successfully!");
    } catch (error) {
        console.log({ error });
    } finally {
        await client.close();
    }
}

// usersSeeding();
postsSeeding();