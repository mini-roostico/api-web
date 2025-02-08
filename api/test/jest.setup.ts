import { beforeAll, afterAll, afterEach } from "@jest/globals";
import {MongoMemoryServer} from "mongodb-memory-server";
import {Server} from "node:http";
import ServerConfig from "../src/configs/server.configs";
import mongoose from "mongoose";

let mongoServer: MongoMemoryServer;
export let app: Server

beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    const uri = mongoServer.getUri();
    await mongoose.connect(uri);
    app = ServerConfig(false);
});

afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
    if (app) {
        await new Promise((resolve) => app.close(resolve));
    }
});

afterEach(async () => {
    const collections = mongoose.connection.collections;
    for (const key in collections) {
        const collection = collections[key];
        await collection.deleteMany({});
    }
});


