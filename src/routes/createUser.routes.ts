import { Router } from "express";
import { CreateUserController } from "../useCase/createUser/CreateUserController";

const createUserRoute = Router();

const createUserController = new CreateUserController();

createUserRoute.post("/person/create", createUserController.handle);

export { createUserRoute };
