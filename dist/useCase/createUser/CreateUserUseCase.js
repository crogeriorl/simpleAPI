"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateUserUseCase = void 0;

var _Winston = require("../../errors/Winston");

var _User = require("../../model/User");

var _PasswordHash = require("../../utils/PasswordHash");

class CreateUserUseCase {
  async execute({
    name,
    email,
    password
  }) {
    const HashPassword = new _PasswordHash.passwordHash();
    const userAlreadyExists = await _User.User.findOne({
      email
    });

    if (userAlreadyExists) {
      throw new Error("User already exists");
    }

    const passwordhash = await HashPassword.hash(password);
    const createUser = await _User.User.create({
      name,
      email,
      password: passwordhash
    });

    _Winston.logger.info({
      CreateUserUseCase: {
        user: "created"
      }
    });

    return createUser;
  }

}

exports.CreateUserUseCase = CreateUserUseCase;