import mongoose from "mongoose";

const MONGODB_URI = "mongodb://127.0.0.1:27017/redrumShop";

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

let cached = global.mongoose;
if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connect() {
  if (cached.conn) {
    return cached.conn; 
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => {
      console.log("Database connected ✅"); // فقط یک بار چاپ میشه
      return mongoose;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

const db = { connect };
export default db;
