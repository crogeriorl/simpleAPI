"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthUserController = void 0;

var _AuthUserUseCase = require("./AuthUserUseCase");

class AuthUserController {
  async handle(request, response) {
    const authUserUseCase = new _AuthUserUseCase.AuthUserUseCase();
    const {
      email,
      password
    } = request.body;

    try {
      const authUser = await authUserUseCase.execute({
        email,
        password
      });
      return response.status(200).json(authUser);
    } catch (error) {
      return response.status(400).json(error.message);
    }
  }

}

exports.AuthUserController = AuthUserController;