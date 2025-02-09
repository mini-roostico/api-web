import { beforeAll, afterAll, afterEach } from "@jest/globals";
import {MongoMemoryServer} from "mongodb-memory-server";
import { Application } from "express";
import ExpressConfig from "../src/configs/express.config";
import mongoose from "mongoose";
import {Server} from "node:net";

let mongoServer: MongoMemoryServer;
export let app: Application
let server: Server

beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    const uri = mongoServer.getUri();
    await mongoose.connect(uri);
    app = ExpressConfig(false);
    server = app.listen(8180);
});

afterAll(done => {
    mongoose.disconnect();
    mongoServer.stop();
    if (server) {
        new Promise((resolve) => server.close(resolve));
    }
    mongoose.connection.close();
    done();
});

afterEach(async () => {
    const collections = mongoose.connection.collections;
    for (const key in collections) {
        const collection = collections[key];
        await collection.deleteMany({});
    }
});
