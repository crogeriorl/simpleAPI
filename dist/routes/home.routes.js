"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = void 0;

var _express = require("express");

const routes = (0, _express.Router)();
exports.routes = routes;
routes.get("/", (request, response) => {
  return response.status(200).json("Hello world");
});