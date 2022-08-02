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
        const user = await User.findOne({ email });

        if (!user) {
            throw new Error("User not found");
        }

        const checkPassword = await compare(password, user.password);

        if (!checkPassword) {
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
            logger.info({
                AuthUserUseCase: {
                    user: email,
                    token: token,
                    status: "User authenticated",
                },
            });
            return { User: user.email, token };
        } catch (error) {
            throw new Error("internal server error");
        }
    }
}
