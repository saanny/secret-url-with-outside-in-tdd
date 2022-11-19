import { Application } from "./Application";
import { Route } from "./Route";
import { SecretsByIdController } from "./SecretsByIdController";
import { SecretsByIdRoute } from "./SecretsByIdRoute";

const secretsByIdController = new SecretsByIdController();
const secretByIdRoute = new SecretsByIdRoute(secretsByIdController);

const routeList: Route[] = [];
routeList.push(secretByIdRoute);

const application = new Application(routeList);
const expressApplication = application.getExpressApplication();

export default expressApplication;