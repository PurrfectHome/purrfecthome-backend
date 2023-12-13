if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

const { MongoClient } = require("mongodb");
const uri = process.env.DATABASE_URI;