import { NextFunction, Request, Response } from "express";
import { UrlId } from "../../domain/models/UrlId";
import { SecretRetriver } from "../../services/SecretRetriver";


export class SecretsByIdController {
    constructor(private secretRetriver: SecretRetriver) {

    }
    retriveSecret = async (request: Request, response: Response, next: NextFunction) => {
        try {
            const urlId = new UrlId(request.params.urlId);
            const secret = await this.secretRetriver.retriverSecretByUrlId(urlId);

        } catch (error) {
            next(error);
        }


    }

}