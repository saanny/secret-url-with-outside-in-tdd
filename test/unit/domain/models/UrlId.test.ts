import { UrlIdValidationError } from "../../../../src/domain/errors/UrlIdValidationError";
import { UrlId } from "../../../../src/domain/models/UrlId";

describe("UrlId Tests", () => {
    it("should create an instance of UrlId", () => {
        expect(new UrlId("1235688972342366123231")).toBeInstanceOf(UrlId)
    });
    it("should throw an error when attempting to create a UrlId that is to short", () => {
        expect(() => new UrlId("sdga")).toThrow(new UrlIdValidationError("UrlId is too short"))
    });
});