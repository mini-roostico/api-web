import {UserModel as User, SourceModel as Source, setupConnection, destroyConnection, dropCollectionsInDb} from "./jest.setup";

let sourceWithParams = {
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
    },
    user: null,
    last_update: null,
};

let sourceEmptyParams = {
    name: "TestSource1",
    user: null,
    last_update: null,
};

const correctUserData = {
    email: "claudio.rossi@email.it",
    password: "PassworD1!",
    firstName: "Claudio",
    secondName: "Rossi"
};

let user;
let last_update: Date;

beforeAll(async () => {
    await setupConnection();

    user = new User(correctUserData);
    await user.save();
    last_update = new Date(Date.now());

    sourceWithParams = {
        ...sourceWithParams,
        user: user._id,
        last_update: last_update,
    }

    sourceEmptyParams = {
        ...sourceEmptyParams,
        user: user._id,
        last_update: last_update,
    }
});

afterAll(async () => {
    await destroyConnection();
});

afterEach(async () => {
    await dropCollectionsInDb();
});

describe("Source's insertion in database",  () => {
    test("Should save a source with params successfully in database", async () => {
        const source = new Source(sourceWithParams);

        await source.save();
        expect(source._id).toBeDefined();
        expect(source.name).toBeDefined();
        expect(source.subjects).toBeDefined();
        expect(source.parameters).toBeDefined();
        expect(source.macros).toBeDefined();
        expect(source.configuration).toBeDefined();
    });

    test("Should save a source with empty params successfully in database", async () => {
        const source = new Source(sourceEmptyParams);

        await source.save();
        expect(source._id).toBeDefined();
        expect(source.name).toBeDefined();
        expect(source.subjects).toBeDefined();
        expect(source.parameters).toBeDefined();
        expect(source.macros).toBeDefined();
    });
});
