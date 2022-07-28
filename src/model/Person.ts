import { Schema, model } from "mongoose";

interface IPerson {
    name: string;
    email: string;
    password: String;
}

const personSchema = new Schema<IPerson>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
});

const Person = model<IPerson>("Person", personSchema);

export { Person };
