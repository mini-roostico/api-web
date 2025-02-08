import { describe, expect, test } from "@jest/globals";

describe("When creating an example test", () => {
    test("should compare to identical strings to be equal", () => {
        expect("a").toBe("a");
    });
});
