import mongoose from "mongoose";
import {UserModel as User, setupConnection, destroyConnection, dropCollectionsInDb} from "./jest.setup";

const correctUserData = {
    email: "claudio.rossi@email.it",
    password: "PassworD1!",
    firstName: "Claudio",
    secondName: "Rossi"
};

beforeAll(async () => {
    await setupConnection();
});

afterAll(async () => {
    await destroyConnection();
});

afterEach(async () => {
    await dropCollectionsInDb();
});

describe("User's insertion in database",  () => {
    test("Should save a user successfully in database", async () => {
        const user = new User(correctUserData);

        await user.save();
        expect(user._id).toBeDefined();
        expect(user.role).toBe("user");
    });

    test("Should save an administrator", async () => {
        let adminData = {
            ...correctUserData,
            role: "admin"
        };

        const admin = new User(adminData);

        await admin.save();
        expect(admin._id).toBeDefined();
        expect(admin.role).toBe("admin");
    });
});

describe("User's field validation tests", () => {
    test("Can't save a user with an invalid password", async () => {
        const user = new User({
            ...correctUserData,
            password: "wrng"
        });

        try {
            await user.save();
        } catch(error) {
            expect(error).toBeDefined();
            expect(error).toBeInstanceOf(mongoose.Error.ValidationError);
            expect(error.errors.password).toBeDefined();
        }
    });

    test("Can't save a user with an invalid email",async () => {
        const user = new User({
            ...correctUserData,
            email: "not an email"
        });

        try {
            await user.save();
        } catch(error) {
            expect(error).toBeDefined();
            expect(error).toBeInstanceOf(mongoose.Error.ValidationError);
            expect(error.errors.email).toBeDefined();
        }
    });

    test("Can't save a user with a numeric first or second name", async () => {
        const user1 = new User({
            ...correctUserData,
            firstName: "test1"
        });

        const user2 = new User({
            ...correctUserData,
            secondName: "test2"
        });

        try {
            await user1.save();
        } catch(error) {
            expect(error).toBeDefined();
            expect(error).toBeInstanceOf(mongoose.Error.ValidationError);
        }

        try {
            await user2.save();
        } catch(error) {
            expect(error).toBeDefined();
            expect(error).toBeInstanceOf(mongoose.Error.ValidationError);
        }
    });

    test("Can't save a user with an email that is already present", async () => {
        const user = new User(correctUserData);

        await user.save();
        expect(user._id).toBeDefined();

        const sameUser = new User(correctUserData);

        try {
            await sameUser.save();
        } catch(error) {
            expect(error).toBeDefined();
            expect(error.message).toBe("The entered email is already present");
        }
    });
})


describe("User model's methods", () => {

    test("Successful password comparison using comparePassword method", async () => {

        const user = new User(correctUserData);

        await user.save();
        expect(user._id).toBeDefined();

        user.comparePassword(correctUserData.password, function(error, isMatch) {
            expect(isMatch).toBe(true);
        });
    });


    test("Unsuccessful password comparison using comparePassword method", async () => {

        const user = new User(correctUserData);

        await user.save();
        expect(user._id).toBeDefined();

        user.comparePassword("NotAGoodPassword", function(error, isMatch) {
            expect(isMatch).toBe(false);
        });
    });
});
