import { request, Request, response, Response } from "express";
import { SecretNotFoundError } from "../../../../src/domain/errors/SecretNotFoundError";
import { UrlIdValidationError } from "../../../../src/domain/errors/UrlIdValidationError";
import { UrlId } from "../../../../src/domain/models/UrlId";
import { SecretsByIdController } from "../../../../src/infra/rest/SecretsByIdController";
import { SecretRetriver } from "../../../../src/services/SecretRetriver";


describe("SecretsbyidController tests", () => {

    it("should throw an error if the urlid is too short", () => {
        const req: Request = request;
        req.params = { urlId: "tsy234" };
        const res: Response = response;
        const next = jest.fn();
        const secretRetriver: SecretRetriver = {
            retriverSecretByUrlId: jest.fn()
        }
        const secretsByIdController = new SecretsByIdController(secretRetriver);
        secretsByIdController.retriveSecret(req, res, next);

        expect(next).toBeCalledTimes(1);
        expect(next).toBeCalledWith(new UrlIdValidationError("UrlId is too short"));
        expect(secretRetriver.retriverSecretByUrlId).toBeCalledTimes(0);
    });

    it("should throw an error if the secret not found", async () => {
        const req: Request = request;
        req.params = { urlId: "tsy23442524sdasdasd" };
        const res: Response = response;
        const next = jest.fn();
        const secretRetriver: SecretRetriver = {
            retriverSecretByUrlId: jest.fn().mockImplementation(async () => {
                throw new SecretNotFoundError();
            })
        }
        const secretsByIdController = new SecretsByIdController(secretRetriver);
        await secretsByIdController.retriveSecret(req, res, next);

        expect(next).toBeCalledTimes(1);
        expect(next).toBeCalledWith(new SecretNotFoundError());
        expect(secretRetriver.retriverSecretByUrlId).toBeCalledTimes(1);
        expect(secretRetriver.retriverSecretByUrlId).toBeCalledWith(new UrlId("tsy23442524sdasdasd"));


    });

});