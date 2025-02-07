import mongoose from "mongoose";

const connectionString =
  (process.env.MONGODB_CONNECTION_STRING as string) ||
  "mongodb://user:pass@localhost:27017/?authMechanism=DEFAULT";

async function MongooseConfig() {
  try {
    await mongoose.connect(connectionString);
  } catch (error) {
    throw new Error("Error while connecting to mongoDB: " + error.message);
  }
}

export default MongooseConfig;
