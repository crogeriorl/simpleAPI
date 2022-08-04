"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createUserRoute = void 0;

var _express = require("express");

var _CreateUserController = require("../useCase/createUser/CreateUserController");

const createUserRoute = (0, _express.Router)();
exports.createUserRoute = createUserRoute;
const createUserController = new _CreateUserController.CreateUserController();
createUserRoute.post("/user/create", createUserController.handle);