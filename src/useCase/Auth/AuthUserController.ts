import { Request, Response } from "express";
import { AuthUserUseCase } from "./AuthUserUseCase";

export class AuthUserController {
    async handle(request: Request, response: Response) {
        const authUserUseCase = new AuthUserUseCase();
        const { email, password } = request.body;

        try {
            const authUser = await authUserUseCase.execute({ email, password });

            return response.status(200).json(authUser);
        } catch (error) {
            return response.status(400).json(error.message);
        }
    }
}
