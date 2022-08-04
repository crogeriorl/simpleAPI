"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.githubProfileRoute = void 0;

var _express = require("express");

var _GithubProfileController = require("../useCase/githubProfile/GithubProfileController");

const githubProfileRoute = (0, _express.Router)();
exports.githubProfileRoute = githubProfileRoute;
const githubProfile = new _GithubProfileController.GithubProfileController();
githubProfileRoute.get("/api/github/profile/:username", githubProfile.handle);