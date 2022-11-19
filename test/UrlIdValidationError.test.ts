import { UrlIdValidationError } from "../src/UrlIdValidationError";

describe("UrlIdValidationError test", () => {
    it("should create a UrlIdValidationError error", () => {
        const error = new UrlIdValidationError("UrlId is too short");

        expect(error).toBeInstanceOf(UrlIdValidationError);
        expect(error.name).toBe("UrlIdValidationError");
        expect(error.message).toBe("UrlId is too short");

    })
})