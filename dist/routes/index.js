"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = void 0;

var _express = require("express");

var _authUser = require("./authUser.routes");

var _createUser = require("./createUser.routes");

var _githubProfile = require("./githubProfile.routes");

var _Auth = require("./middleware/Auth");

const routes = (0, _express.Router)();
exports.routes = routes;
const authMiddleware = new _Auth.Auth();
routes.use(_authUser.authUserRoute);
routes.use(authMiddleware.execute);
routes.use(_createUser.createUserRoute);
routes.use(_githubProfile.githubProfileRoute);