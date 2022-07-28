import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
    async handle(request: Request, response: Response) {
        const { name, email, password } = request.body;
        const createUserUseCase = new CreateUserUseCase();

        const createPerson = await createUserUseCase.execute({
            name,
            email,
            password,
        });

        return createPerson;
    }
}
