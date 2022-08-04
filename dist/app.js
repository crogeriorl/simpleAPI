"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.app = void 0;

require("dotenv/config");

require("./database/mongoDB");

var _express = _interopRequireDefault(require("express"));

var _routes = require("./routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
exports.app = app;
app.use(_express.default.json());
app.use(_routes.routes);