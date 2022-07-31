import { Router } from "express";
import { authUserRoute } from "./authUser.routes";
import { createUserRoute } from "./createUser.routes";
import { Auth } from "./middleware/Auth";

const routes = Router();
const authMiddleware = new Auth();

routes.use(authUserRoute);
routes.use(authMiddleware.execute);
routes.use(createUserRoute);

export { routes };
