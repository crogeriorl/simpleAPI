"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthUserUseCase = void 0;

var _bcryptjs = require("bcryptjs");

var _User = require("../../model/User");

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _Winston = require("../../errors/Winston");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class AuthUserUseCase {
  async execute({
    email,
    password
  }) {
    const user = await _User.User.findOne({
      email
    });

    if (!user) {
      throw new Error("User not found");
    }

    const checkPassword = await (0, _bcryptjs.compare)(password, user.password);

    if (!checkPassword) {
      throw new Error("Email ou password incorrect");
    }

    try {
      const secret = process.env.SECRET_KEY;

      const token = _jsonwebtoken.default.sign({
        id: user._id
      }, secret, {
        expiresIn: "1d"
      });

      _Winston.logger.info({
        AuthUserUseCase: {
          user: email,
          token: token,
          status: "User authenticated"
        }
      });

      return {
        User: user.email,
        token
      };
    } catch (error) {
      throw new Error("internal server error");
    }
  }

}

exports.AuthUserUseCase = AuthUserUseCase;