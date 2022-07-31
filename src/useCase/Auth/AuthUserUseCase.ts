import { compare } from "bcryptjs";
import { User } from "../../model/User";
import jwt from "jsonwebtoken";
import { logger } from "../../errors/Winston";

interface IAuthUser {
    email: string;
    password: string;
}

export class AuthUserUseCase {
    async execute({ email, password }: IAuthUser) {
        const user = await User.findOne();

        if (!user) {
            throw new Error("User not found");
        }

        const checkPassowrd = await compare(password, user.password);

        if (!checkPassowrd) {
            throw new Error("Email ou password incorrect");
        }
        try {
            const secret = process.env.SECRET_KEY;

            const token = jwt.sign(
                {
                    id: user._id,
                },
                secret,
                {
                    expiresIn: "1d",
                }
            );
            logger.info("User authenticated");
            return { User: user.email, token };
        } catch (error) {
            throw new Error("internal server error");
        }
    }
}
