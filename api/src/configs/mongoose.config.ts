import mongoose from "mongoose";

const mongoHost = process.env.MONGO_HOST || "localhost";
const mongoPort = process.env.MONGO_PORT || 27017;
const connectionString =
  (process.env.MONGODB_CONNECTION_STRING as string) ||
  `mongodb://${mongoHost}:${mongoPort}/`;

async function MongooseConfig() {
  try {
    await mongoose.connect(connectionString);
  } catch (error) {
    throw new Error("Error while connecting to mongoDB: " + error.message);
  }
}

export default MongooseConfig;
