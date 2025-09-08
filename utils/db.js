import mongoose from "mongoose";

function connect() {
  mongoose.connect("mongodb:// 127.0.0.1:27017/redrumShop");

  console.log("connected");
}

const db = { connect };
export default db;
