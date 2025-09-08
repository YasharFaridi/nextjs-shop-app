import db from "../../utils/db";
import User from "../../models/userModel";
import userItems from "../../data/users.json";

export default async function handler(req, res) {
  await db.connect();
  User.insertMany(userItems);
  res.send({ message: "Users added." });
}
