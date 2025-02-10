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

const ATPrivateKeyPath =
    (process.env.AT_PRIVATE as string) || "./secrets/at_private.pem";
const RTPrivateKeyPath =
    (process.env.RT_PRIVATE as string) || "./secrets/rt_private.pem";

JwtHandler.config({
    ATPrivateKeyPath: resolve(ATPrivateKeyPath),
    RTPrivateKeyPath: resolve(RTPrivateKeyPath)
});

describe("GET /users/", () => {

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

    test("Get the information of a user", async () => {
        const response = await request(app)
            .get("/users/")
            .set("Authorization", `Bearer ${jwtUser.accessToken}`)
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(StatusCodes.OK);

        expect(response.body.success).toBe(true);
        expect(response.body.data).toHaveProperty("email");
        expect(response.body.data).toHaveProperty("firstName");
        expect(response.body.data).toHaveProperty("secondName");
        expect(response.body.data).toHaveProperty("role");
        expect(response.body.data.email).toBe(user.email);
        expect(response.body.data.firstName).toBe(user.firstName);
        expect(response.body.data.secondName).toBe(user.secondName);
        expect(response.body.data.role).toBe(user.role);
    }, MAX_TIMEOUT);

    test("Can't get the information of a user with an invalid token", async () => {
        const response = await request(app)
            .get("/users/")
            .set("Authorization", `Bearer invalid`)
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(StatusCodes.NOT_FOUND);

        expect(response.body).toHaveProperty("code");
        expect(response.body).toHaveProperty("error");

        expect(response.body.code).toBe(StatusCodes.NOT_FOUND);
        expect(response.body.error.message).toBe("Submitted jwt token doesn't exist");
        expect(response.body.error.name).toBe("Not Found");
    }, MAX_TIMEOUT);
});

describe("POST /users/", () => {

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

    test("Create a new user", async () => {
        const response = await request(app)
            .post("/users/")
            .send({
                email: "new.user@email.it",
                password: "Password1!",
                firstName: "New",
                secondName: "User"
            }).set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(StatusCodes.CREATED);

        expect(response.body).toHaveProperty("code");
        expect(response.body).toHaveProperty("data");

        expect(response.body.code).toBe(StatusCodes.CREATED);
        expect(response.body.data.email).toBe("new.user@email.it");
        expect(response.body.data.firstName).toBe("New");
        expect(response.body.data.secondName).toBe("User");
    }, MAX_TIMEOUT);
});


describe("PUT /users/", () => {

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

    test("Edit the information of a user", async () => {
        const response = await request(app)
            .put("/users/")
            .send({
                data: {
                    firstName: "Claudio",
                    secondName: "Pozzi"
                }
            })
            .set("Authorization", `Bearer ${jwtUser.accessToken}`)
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(StatusCodes.OK);

        expect(response.body.data).toBe(true);
    }, MAX_TIMEOUT);

    test("Can't edit the password of a user", async () => {
        const response = await request(app)
            .put(`/users/`)
            .send({
                data: {
                    password: "Password2!"
                }
            })
            .set("Authorization", `Bearer ${jwtUser.accessToken}`)
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(StatusCodes.BAD_REQUEST);

        expect(response.body).toHaveProperty("code");
        expect(response.body).toHaveProperty("error");
    }, MAX_TIMEOUT);

});

describe("DELETE /users/", () => {

    let userToDelete;
    let jwtToDelete;

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

        userToDelete = await new User({
            email: "todelete.user@email.it",
            password: "Password1!",
            firstName: "ToDelete",
            secondName: "User"
        }).save();

        jwtToDelete = await Jwt.createTokenPair(userToDelete, {accessToken: "10m", refreshToken: "20m"});
    });

    afterEach(async () => {
        await User.deleteMany({firstName: "ToDelete"});
        await Jwt.deleteMany({email: userToDelete.email});
    });

    test("Delete a user", async () => {

        const response = await request(app)
            .delete("/users/")
            .send({
                data: {
                    email: userToDelete.email
                }
            })
            .set("Authorization", `Bearer ${jwtToDelete.accessToken}`)
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(StatusCodes.OK);

        expect(response.body).toHaveProperty("data");
        expect(response.body.data).toBe(true);
        expect(response.body.code).toBe(StatusCodes.OK);
    }, MAX_TIMEOUT);

    test("Can't delete another user", async () => {
        const response = await request(app)
            .delete(`/users/`)
            .send({
                data: {
                    email: userToDelete.email
                }
            })
            .set("Authorization", `Bearer ${jwtUser.accessToken}`)
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(StatusCodes.UNAUTHORIZED);

        expect(response.body).toHaveProperty("code");
        expect(response.body).toHaveProperty("error");

        expect(response.body.code).toBe(StatusCodes.UNAUTHORIZED);
        expect(response.body.error.message).toBe("Can't access to the resource");
        expect(response.body.error.name).toBe("Unauthorized");
    }, MAX_TIMEOUT);

    test("Delete another user with an admin account", async () => {
        const response = await request(app)
            .delete(`/users/`)
            .send({
                data: {
                    email: userToDelete.email
                }
            })
            .set("Authorization", `Bearer ${jwtAdmin.accessToken}`)
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(StatusCodes.OK);

        expect(response.body).toHaveProperty("code");
        expect(response.body).toHaveProperty("data");
        expect(response.body.code).toBe(StatusCodes.OK);
        expect(response.body.data).toBe(true);
    }, MAX_TIMEOUT);
});