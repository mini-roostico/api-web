import { beforeAll } from "@jest/globals";
import {StatusCodes} from "http-status-codes";
// @ts-ignore
import request from "supertest";
import {resolve} from "path";
import { JwtModel as Jwt, UserRepositoryModel as UserRepository } from "../src/models/models.js";
import {JwtHandler} from "@mini-roostico/api-common";
import {app} from "./jest.setup";
let user;
let userPassword;
let jwtDefault;

const ATPrivateKeyPath =
    (process.env.AT_PRIVATE as string) || "./secrets/at_private.pem";
const RTPrivateKeyPath =
    (process.env.RT_PRIVATE as string) || "./secrets/rt_private.pem";

JwtHandler.config({
    ATPrivateKeyPath: resolve(ATPrivateKeyPath),
    RTPrivateKeyPath: resolve(RTPrivateKeyPath)
});

describe("POST /auth/login", () => {
    beforeAll(async () => {
        userPassword = "Password1!";
        user = await UserRepository.createUser({
            email: "test.user@email.it",
            password: userPassword,
            firstName: "Test",
            secondName: "User",
        });
    });
    test("Login with user data", async () => {
        const response = await request(app)
            .post("/auth/login")
            .send({
                email: user.email,
                password: userPassword,
            })
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(StatusCodes.OK);
        expect(response.body.success).toBe(true);
        expect(response.body.data).toHaveProperty("accessToken");
        expect(response.body.data).toHaveProperty("refreshToken");
    });
    test("Login with wrong user data", async () => {
        const response = await request(app)
            .post("/auth/login")
            .send({
                email: user.email,
                password: user.password + "wrong",
            })
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(StatusCodes.UNAUTHORIZED);
        expect(response.body.code).toBe(StatusCodes.UNAUTHORIZED);
        expect(response.body.error.name).toBe("Unauthorized");
        expect(response.body.error.message).toBe("Login error");
    });
    test("Login without full data", async () => {
        const response = await request(app)
            .post("/auth/login")
            .send({
                email: user.email,
            })
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(StatusCodes.BAD_REQUEST);
        expect(response.body.code).toBe(StatusCodes.BAD_REQUEST);
        expect(response.body.error.name).toBe("Bad Request");
        expect(response.body.error.message).toBe("Some validation errors occurred.");
        const response2 = await request(app)
            .post("/auth/login")
            .send({
                password: "test",
            })
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(StatusCodes.BAD_REQUEST);
        expect(response2.body.code).toBe(StatusCodes.BAD_REQUEST);
        expect(response2.body.error.name).toBe("Bad Request");
        expect(response2.body.error.message).toBe("Some validation errors occurred.");
    });
});
describe("POST /auth/logout", () => {
    beforeEach(async () => {
        userPassword = "Password1!";
        user = await UserRepository.createUser({
            email: "test.user@email.it",
            password: userPassword,
            firstName: "Test",
            secondName: "User",
        });
        jwtDefault = await Jwt.createTokenPair(user, {"accessToken": "10m", "refreshToken": "20m"});
    });
    afterEach(async () => {
        const tokenDoc = await Jwt.findOneAndDelete({email: user.email});
    });
    test("Can logout successfully from the application", async () => {
        const logoutResponse = await request(app)
            .post("/auth/logout")
            .set("Authorization", `Bearer ${jwtDefault.accessToken}`)
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(StatusCodes.OK);
        expect(logoutResponse.body.success).toBe(true);
        const tokenDoc = await Jwt.findOne({accessToken: jwtDefault.accessToken});
        expect(tokenDoc!.enabled).toBe(false);
    });
});
describe("POST /auth/refresh", () => {
    beforeEach(async () => {
        userPassword = "Password1!";
        user = await UserRepository.createUser({
            email: "test.user@email.it",
            password: userPassword,
            firstName: "Test",
            secondName: "User",
        });
        jwtDefault = await Jwt.createTokenPair(user, {"accessToken": "10m", "refreshToken": "20m"});
    });
    afterEach(async () => {
        await Jwt.findOneAndDelete({refreshToken: jwtDefault.refreshToken});
    });
    test("Refresh token with valid data", async () => {
        const response = await request(app)
            .post("/auth/refresh")
            .send({
                email: user.email,
                refreshToken: jwtDefault.refreshToken
            })
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(StatusCodes.OK);
        expect(response.body.data).toHaveProperty("accessToken");
        expect(response.body.data).toHaveProperty("refreshToken");
    });
    test("Can't refresh a token if the mail doesn't exist", async () => {
        const response = await request(app)
            .post("/auth/refresh")
            .send({
                email: "wrong.email@test.it",
                refreshToken: jwtDefault.refreshToken
            })
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(StatusCodes.NOT_FOUND);
        expect(response.body.code).toBe(StatusCodes.NOT_FOUND);
        expect(response.body.error.name).toBe("Not Found");
        expect(response.body.error.message).toBe("The specified email doesn't belong to any users");
    });
    test("Can't refresh a token if the token doesn't exist", async () => {
        const response = await request(app)
            .post("/auth/refresh")
            .send({
                email: user.email,
                refreshToken: jwtDefault.accessToken + "wrong"
            })
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(StatusCodes.NOT_FOUND);
        expect(response.body.code).toBe(StatusCodes.NOT_FOUND);
        expect(response.body.error.name).toBe("Not Found");
        expect(response.body.error.message).toBe("Can't find the requested token");
    });
    test("Can't refresh a token if the token doesn't belong to the user", async () => {
        const user2 = await UserRepository.createUser({
            email: "test.user2@email.it",
            password: "Password1!",
            firstName: "Test",
            secondName: "UserDos",
        });
        const jwtDefault2 = await Jwt.createTokenPair(user2,
            {"accessToken": "10m", "refreshToken": "20m"});
        const response = await request(app)
            .post("/auth/refresh")
            .send({
                email: user.email,
                refreshToken: jwtDefault2.refreshToken
            })
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(StatusCodes.UNAUTHORIZED);
        expect(response.body.code).toBe(StatusCodes.UNAUTHORIZED);
        expect(response.body.error.name).toBe("Unauthorized");
        expect(response.body.error.message).toBe("The submitted token doesn't belong to the specified user");
        await UserRepository.deleteUser(user2.email);
        await Jwt.findOneAndDelete({refreshToken: jwtDefault2.refreshToken});
    });
});
