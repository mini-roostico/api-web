import {describe, expect, it} from "@jest/globals";
// @ts-ignore
import request from "supertest"
import {app} from "./jest.setup";


describe("User controller", () => {
    it("should correctly create a user", async () => {
        const response = await request(app)
            .post("/users")
            .send({
                email: "a@a.com",
                password: "StrongPassword!234",
                firstName: "John",
                secondName: "Doe",
            })
            .expect(201)
        const { data } = response.body
        expect(data.email).toBe("a@a.com")
        expect(data.firstName).toBe("John")
        expect(data.secondName).toBe("Doe")
    });
});