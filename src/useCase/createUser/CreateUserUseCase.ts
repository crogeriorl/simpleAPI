import { Person } from "../../model/Person";

interface ICreatePerson {
    name: string;
    email: string;
    password: string;
}

export class CreateUserUseCase {
    async execute({ name, email, password }: ICreatePerson) {
        const userAlreadyExists = await Person.findOne({ email });

        if (userAlreadyExists) {
            return "User already exists";
        }

        const createPerson = await Person.create({
            name,
            email,
            password,
        });

        return createPerson;
    }
}
