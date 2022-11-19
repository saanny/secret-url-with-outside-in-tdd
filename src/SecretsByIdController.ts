import { NextFunction, Request, Response } from "express";
import { UrlIdValidationError } from "./UrlIdValidationError";

export class SecretsByIdController {
    retriveSecret = (request: Request, response: Response, next: NextFunction) => {
        if (request.params.urlId.length < 10) next(new UrlIdValidationError("UrlId is too short"))

    }

}