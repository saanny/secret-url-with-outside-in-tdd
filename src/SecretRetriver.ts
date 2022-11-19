import { Secret } from "./Secret";
import { UrlId } from "./UrlId";

export interface SecretRetriver {
    retriverSecretByUrlId(urlId: UrlId): Promise<Secret>;
}