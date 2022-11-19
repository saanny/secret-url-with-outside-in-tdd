import { Secret } from "../domain/models/Secret";
import { UrlId } from "./UrlId";

export interface SecretRetriver {
    retriverSecretByUrlId(urlId: UrlId): Promise<Secret>;
}