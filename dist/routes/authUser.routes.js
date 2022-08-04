"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authUserRoute = void 0;

var _express = require("express");

var _AuthUserController = require("../useCase/Auth/AuthUserController");

const authUserRoute = (0, _express.Router)();
exports.authUserRoute = authUserRoute;
const authUserController = new _AuthUserController.AuthUserController();
authUserRoute.post("/user/auth", authUserController.handle);