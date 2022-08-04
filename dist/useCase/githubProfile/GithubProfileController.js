"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GithubProfileController = void 0;

var _GithubProfileUseCase = require("./GithubProfileUseCase");

class GithubProfileController {
  async handle(request, response) {
    const {
      username
    } = request.params;
    const githubProfile = new _GithubProfileUseCase.GithubProfileUseCase();
    const result = await githubProfile.execute(username);
    return response.status(200).json(result);
  }

}

exports.GithubProfileController = GithubProfileController;