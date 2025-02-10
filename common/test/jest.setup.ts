/**
 * This files contains all the util functions for create a local database for
 * testing all the models logic of the organization
 */
import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose, { model } from "mongoose";
import {
    createJwtSchema,
    IJsonWebToken, IJsonWebTokenModel,
    ISource,
    IUser,
    Source,
    SourceDocumentType,
    User,
    UserDocumentType
} from "../src";

export const UserModel = mongoose.model<IUser, UserDocumentType>("Users", User);

export const SourceModel = mongoose.model<ISource, SourceDocumentType>(
    "Source",
    Source,
);

const Jwt = createJwtSchema(UserModel);
export const JwtModel = model<IJsonWebToken, IJsonWebTokenModel>("Jwt", Jwt);


let mongodb: MongoMemoryServer
/**
 * Estabilish a new connection to the local mongodb server
 */
export async function setupConnection() {
    mongodb = await MongoMemoryServer.create();
    await mongoose.connect(mongodb.getUri());
}

/**
 * Destroy the connection of the local mongodb server
 */
export async function destroyConnection() {
    if (mongodb) {
        await mongoose.connection.dropDatabase();
        await mongoose.connection.close();
        await mongodb.stop();
    }
}

/**
 * Drop the data from the various collection of the database
 */
export async function dropCollectionsInDb() {
    if(mongodb) {
        const collections = mongoose.connection.collections;
        for (const key in collections) {
            const collection = collections[key];
            await collection.deleteMany();
        }
    }
}