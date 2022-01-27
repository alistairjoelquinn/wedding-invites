const { MongoClient } = require('mongodb');

const { MONGODB_URI, MONGODB_DB } = process.env;

if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

if (!MONGODB_DB) {
    throw new Error('Please define the MONGODB_DB environment variable inside .env.local');
}

let cached = global.mongo;

if (!cached) {
    cached = global.mongo = { conn: null, promise: null };
}

module.exports = async function connectToDatabase() {
    // console.log('global.mongo: ', inspect(global.mongo, { showHidden: false, depth: null, colors: true }));

    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        const opts = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };

        cached.promise = MongoClient.connect(MONGODB_URI, opts).then((client) => ({
            client,
            db: client.db(MONGODB_DB),
        }));
    }
    cached.conn = await cached.promise;
    return cached.conn;
};
