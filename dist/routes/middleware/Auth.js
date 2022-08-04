"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Auth = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Auth {
  async execute(request, response, next) {
    const authHeader = request.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
      return response.status(401).json({
        error: "token is missing"
      });
    }

    try {
      const secret = process.env.SECRET_KEY;

      _jsonwebtoken.default.verify(token, secret);

      next();
    } catch (error) {
      return response.status(401).json({
        error: "token invalid!"
      });
    }
  }

}

exports.Auth = Auth;