import { Application } from "./rest/Application";
import { Route } from "./rest/Route";
import { SecretsByIdController } from "./rest/SecretsByIdController";
import { SecretsByIdRoute } from "./rest/SecretsByIdRoute";
import { Secret } from "./Secret";
import { SecretRetriver } from "./SecretRetriver";
import { UrlId } from "./UrlId";

const secretRetriver: SecretRetriver = {
    retriverSecretByUrlId: (urlId: UrlId): Promise<Secret> => {
        throw new Error("function not implemented");
    }
}
const secretsByIdController = new SecretsByIdController(secretRetriver);
const secretByIdRoute = new SecretsByIdRoute(secretsByIdController);

const routeList: Route[] = [];
routeList.push(secretByIdRoute);

const application = new Application(routeList);
const expressApplication = application.getExpressApplication();

export default expressApplication;