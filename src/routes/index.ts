import { Router } from "express";
import { createUserRoute } from "./createUser.routes";

const routes = Router();

routes.use(createUserRoute);

export { routes };
