import { Router } from "express";

const routes = Router();

routes.get("/", (request, response) => {
    return response.status(200).json("Hello world");
});

export { routes };
