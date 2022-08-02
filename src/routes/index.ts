import { Router } from "express";
import { authUserRoute } from "./authUser.routes";
import { createUserRoute } from "./createUser.routes";
import { githubProfileRoute } from "./githubProfile.routes";
import { Auth } from "./middleware/Auth";

const routes = Router();
const authMiddleware = new Auth();

routes.use(authUserRoute);
routes.use(authMiddleware.execute);
routes.use(createUserRoute);
routes.use(githubProfileRoute);

export { routes };
