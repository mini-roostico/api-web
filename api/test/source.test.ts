import {StatusCodes} from "http-status-codes";
// @ts-ignore
import request from "supertest";
import {resolve} from "path";
import {UserModel as User, JwtModel as Jwt} from "../src/models/models.js";
import {JwtHandler} from "@mini-roostico/api-common";
import {app} from "./jest.setup";

let jwtUser, jwtAdmin
let user, admin;
const MAX_TIMEOUT = 20_000;
const source = {
    name: "TestSource",
    subjects: [
        {
            name: "TestSubject"
        }
    ],
    parameters: [
        {
            name: "TestParameter",
            values: ["TestValue"]
        }
    ],
    macros: [
        {
            name: "TestMacro()",
            values: ["TestValue"]
        }
    ],
    configuration: {
        "TestKey": "TestValue",
    }
};

const ATPrivateKeyPath =
    (process.env.AT_PRIVATE as string) || "./secrets/at_private.pem";
const RTPrivateKeyPath =
    (process.env.RT_PRIVATE as string) || "./secrets/rt_private.pem";

JwtHandler.config({
    ATPrivateKeyPath: resolve(ATPrivateKeyPath),
    RTPrivateKeyPath: resolve(RTPrivateKeyPath)
});

describe("GET /sources/", () => {

    let userWithSources, jwtUserWithSources;
    let userWithoutSources, jwtUserWithoutSources;

    beforeEach(async () => {
        userWithSources = await new User({
            email: "fake.email@email.it",
            password: "Password1!",
            firstName: "Test",
            secondName: "UserWithSources",
        }).save();

        userWithoutSources = await new User({
            email: "fake.email1@email.it",
            password: "Password1!",
            firstName: "Test",
            secondName: "UserNoSources"
        }).save();

        admin = await new User({
            email: "admin.email@email.it",
            password: "Password1!",
            firstName: "Test",
            secondName: "User",
            role: "admin"
        }).save();

        jwtUserWithSources = await Jwt.createTokenPair(userWithSources, {accessToken: "10m", refreshToken: "20m"});
        jwtUserWithoutSources = await Jwt.createTokenPair(userWithoutSources, {accessToken: "10m", refreshToken: "20m"});
        jwtAdmin = await Jwt.createTokenPair(admin, {accessToken: "10m", refreshToken: "20m"});

        await request(app)
            .post("/sources/")
            .send(source)
            .set("Authorization", `Bearer ${jwtUserWithSources.accessToken}`)
            .set("Accept", "application/json");
    });

    test("Get the sources of a user who doesn't have any", async () => {
        const response = await request(app)
            .get("/sources/")
            .set("Authorization", `Bearer ${jwtUserWithoutSources.accessToken}`)
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(StatusCodes.OK);

        expect(response.body.success).toBe(true);
        expect(response.body.data).toEqual([]);
    }, MAX_TIMEOUT);

    test("Get the sources of a user", async () => {
        const response = await request(app)
            .get("/sources/")
            .set("Authorization", `Bearer ${jwtUserWithSources.accessToken}`)
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(StatusCodes.OK);

        expect(response.body.success).toBe(true);
        expect(response.body).toHaveProperty("data");
        expect(response.body.data[0]).toHaveProperty("configuration");
        expect(response.body.data[0]).toHaveProperty("last_update");
        expect(response.body.data[0]).toHaveProperty("macros");
        expect(response.body.data[0]).toHaveProperty("user");

        expect(response.body.data[0].configuration).toEqual(source.configuration);
        expect(response.body.data[0].macros).toEqual(source.macros);
        expect(response.body.data[0].configuration).toEqual(source.configuration);
    }, MAX_TIMEOUT);

    test("Get the sources of an admin", async () => {
        const response = await request(app)
            .get("/sources/")
            .set("Authorization", `Bearer ${jwtAdmin.accessToken}`)
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(StatusCodes.OK);

        expect(response.body.success).toBe(true);
        expect(response.body).toHaveProperty("data");
        expect(response.body.data[0]).toHaveProperty("configuration");
        expect(response.body.data[0]).toHaveProperty("last_update");
        expect(response.body.data[0]).toHaveProperty("macros");
        expect(response.body.data[0]).toHaveProperty("user");

        expect(response.body.data[0].configuration).toEqual(source.configuration);
        expect(response.body.data[0].macros).toEqual(source.macros);
        expect(response.body.data[0].configuration).toEqual(source.configuration);
    }, MAX_TIMEOUT);
});

describe("POST /sources/submit/", () => {

    beforeEach(async () => {
        user = await new User({
            email: "fake.email@email.it",
            password: "Password1!",
            firstName: "Test",
            secondName: "User"
        }).save();

        admin = await new User({
            email: "admin.email@email.it",
            password: "Password1!",
            firstName: "Test",
            secondName: "User",
            role: "admin"
        }).save();

        jwtUser = await Jwt.createTokenPair(user, {accessToken: "10m", refreshToken: "20m"});
        jwtAdmin = await Jwt.createTokenPair(admin, {accessToken: "10m", refreshToken: "20m"});
    });

    test("Submit a new generation", async () => {
        const response = await request(app)
            .post("/sources/submit")
            .send(source)
            .set("Authorization", `Bearer ${jwtUser.accessToken}`)
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(StatusCodes.CREATED);

        expect(response.body.success).toBe(true);
        expect(response.body).toHaveProperty("data");
        expect(response.body.data).toHaveProperty("resolvedSubjects");
        expect(response.body.data).toHaveProperty("generationGraph");

    }, MAX_TIMEOUT);
});


describe("POST /sources/", () => {

    beforeEach(async () => {
        user = await new User({
            email: "fake.email@email.it",
            password: "Password1!",
            firstName: "Test",
            secondName: "UserWithSources",
        }).save();

        jwtUser = await Jwt.createTokenPair(user, {accessToken: "10m", refreshToken: "20m"});
    });

    test("Save a new source", async () => {
        const response = await request(app)
            .post("/sources/")
            .send(source)
            .set("Authorization", `Bearer ${jwtUser.accessToken}`)
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(StatusCodes.CREATED);

        expect(response.body.success).toBe(true);
        expect(response.body).toHaveProperty("data");
        expect(response.body.data).toHaveProperty("configuration");
        expect(response.body.data).toHaveProperty("last_update");
        expect(response.body.data).toHaveProperty("macros");
        expect(response.body.data).toHaveProperty("user");

        expect(response.body.data.configuration).toEqual(source.configuration);
        expect(response.body.data.macros).toEqual(source.macros);
        expect(response.body.data.configuration).toEqual(source.configuration);
    }, MAX_TIMEOUT);
});


describe("PUT /sources/", () => {

    let sourceId;
    const newName = "NewSourceName";

    beforeEach(async () => {
        user = await new User({
            email: "fake.email@email.it",
            password: "Password1!",
            firstName: "Test",
            secondName: "UserWithSources",
        }).save();

        jwtUser = await Jwt.createTokenPair(user, {accessToken: "10m", refreshToken: "20m"});

        await request(app)
            .post("/sources/")
            .send(source)
            .set("Authorization", `Bearer ${jwtUser.accessToken}`)
            .set("Accept", "application/json");

        const response = await request(app)
            .get("/sources/")
            .set("Authorization", `Bearer ${jwtUser.accessToken}`)
            .set("Accept", "application/json");

        sourceId = response.body.data[0]._id;
    });

    test("Edit the information of a source", async () => {
        const responsePut = await request(app)
            .put("/sources/")
            .send({
                data: {
                    _id: sourceId,
                    name: newName
                }
            })
            .set("Authorization", `Bearer ${jwtUser.accessToken}`)
            .set("Accept", "application/json");

        expect(responsePut.body.success).toBe(true);
        expect(responsePut.body).toHaveProperty("data");
        expect(responsePut.body.data).toHaveProperty("configuration");
        expect(responsePut.body.data).toHaveProperty("last_update");
        expect(responsePut.body.data).toHaveProperty("macros");
        expect(responsePut.body.data).toHaveProperty("user");

        expect(responsePut.body.data.name).toEqual(newName);
        expect(responsePut.body.data.configuration).toEqual(source.configuration);
        expect(responsePut.body.data.macros).toEqual(source.macros);
        expect(responsePut.body.data.configuration).toEqual(source.configuration);
    }, MAX_TIMEOUT);
});

describe("DELETE /sources/", () => {

    let sourceId;

    beforeEach(async () => {
        user = await new User({
            email: "fake.email@email.it",
            password: "Password1!",
            firstName: "Test",
            secondName: "UserWithSources",
        }).save();

        jwtUser = await Jwt.createTokenPair(user, {accessToken: "10m", refreshToken: "20m"});

        await request(app)
            .post("/sources/")
            .send(source)
            .set("Authorization", `Bearer ${jwtUser.accessToken}`)
            .set("Accept", "application/json");

        const response = await request(app)
            .get("/sources/")
            .set("Authorization", `Bearer ${jwtUser.accessToken}`)
            .set("Accept", "application/json");

        sourceId = response.body.data[0]._id;
    });

    test("Delete a source", async () => {

        const response = await request(app)
            .delete("/sources/")
            .send({
                data: {
                    _id: sourceId
                }
            })
            .set("Authorization", `Bearer ${jwtUser.accessToken}`)
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(StatusCodes.OK);

        expect(response.body).toHaveProperty("data");
        expect(response.body.data).toBe(true);
        expect(response.body.code).toBe(StatusCodes.OK);
    }, MAX_TIMEOUT);
});