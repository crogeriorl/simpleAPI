"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateUserController = void 0;

var _Winston = require("../../errors/Winston");

var _CreateUserUseCase = require("./CreateUserUseCase");

class CreateUserController {
  async handle(request, response) {
    const {
      name,
      email,
      password
    } = request.body;
    const createUserUseCase = new _CreateUserUseCase.CreateUserUseCase();

    try {
      const createPerson = await createUserUseCase.execute({
        name,
        email,
        password
      });
      const result = {
        name: createPerson.name,
        email: createPerson.email
      };
      return response.status(201).json(result);
    } catch (error) {
      _Winston.logger.error(error.message);

      return response.status(400).json(error.message);
    }
  }

}

exports.CreateUserController = CreateUserController;