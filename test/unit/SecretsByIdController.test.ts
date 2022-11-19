import { request, Request, response, Response } from "express";
import { SecretsByIdController } from "../../src/rest/SecretsByIdController";
import { UrlIdValidationError } from "../../src/UrlIdValidationError";

describe("SecretsbyidController tests", () => {

    it("should throw an error if the urlid is too short", () => {
        const req: Request = request;
        req.params = { urlId: "tsy234" };
        const res: Response = response;
        const next = jest.fn();

        const secretsByIdController = new SecretsByIdController();
        secretsByIdController.retriveSecret(req, res, next);

        expect(next).toBeCalledTimes(1);
        expect(next).toBeCalledWith(new UrlIdValidationError("UrlId is too short"));
    });

});