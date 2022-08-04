"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.passwordHash = void 0;

var _bcryptjs = require("bcryptjs");

class passwordHash {
  async hash(password) {
    return (0, _bcryptjs.hash)(password, 8);
  }

}

exports.passwordHash = passwordHash;