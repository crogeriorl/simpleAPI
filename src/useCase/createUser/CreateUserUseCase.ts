import { Person } from "../../model/Person";
import { passwordHash } from "../../utils/PasswordHash";

interface ICreatePerson {
    name: string;
    email: string;
    password: string;
}

export class CreateUserUseCase {
    async execute({ name, email, password }: ICreatePerson) {
        const HashPassword = new passwordHash();
        const userAlreadyExists = await Person.findOne({ email });

        if (userAlreadyExists) {
            throw new Error("User already exists");
        }
        const passwordhash = await HashPassword.hash(password);
        const createPerson = await Person.create({
            name,
            email,
            password: passwordhash,
        });

        return createPerson;
    }
}
