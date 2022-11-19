import { Secret } from "./domain/models/Secret";
import { UrlId } from "./domain/models/UrlId";
import { Application } from "./infra/rest/Application";
import { Route } from "./infra/rest/Route";
import { SecretsByIdController } from "./infra/rest/SecretsByIdController";
import { SecretsByIdRoute } from "./infra/rest/SecretsByIdRoute";
import { SecretRetriver } from "./services/SecretRetriver";


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