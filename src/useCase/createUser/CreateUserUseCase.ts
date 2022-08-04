import { logger } from "../../errors/Winston";
import { User } from "../../model/User";
import { passwordHash } from "../../utils/PasswordHash";

interface ICreateUser {
    name: string;
    email: string;
    password: string;
}

export class CreateUserUseCase {
    async execute({ name, email, password }: ICreateUser) {
        const HashPassword = new passwordHash();
        const userAlreadyExists = await User.findOne({ email });

        if (userAlreadyExists) {
            throw new Error("User already exists");
        }
        const passwordhash = await HashPassword.hash(password);
        const createUser = await User.create({
            name,
            email,
            password: passwordhash,
        });
        logger.info({ CreateUserUseCase: { user: "created" } });

        return createUser;
    }
}
