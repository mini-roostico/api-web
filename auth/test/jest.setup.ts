import { beforeAll, afterAll, afterEach } from "@jest/globals";
import {MongoMemoryServer} from "mongodb-memory-server";
import { Application } from "express";
import ExpressConfig from "../src/configs/express.config";
import mongoose from "mongoose";
import {Server} from "node:net";

let mongoServer: MongoMemoryServer;
export let app: Application
let server: Server

beforeAll(async (done) => {
    mongoServer = await MongoMemoryServer.create();
    const uri = mongoServer.getUri();
    await mongoose.connect(uri);
    app = ExpressConfig(false);
    server = app.listen(8180);
    done();
});

afterAll(async (done) => {
    await mongoose.disconnect();
    await mongoServer.stop();
    if (server) {
        await new Promise((resolve) => server.close(resolve));
    }
    mongoose.connection.close()
    done();
});

afterEach(async (done) => {
    const collections = mongoose.connection.collections;
    for (const key in collections) {
        const collection = collections[key];
        await collection.deleteMany({});
    }
    done();
});
