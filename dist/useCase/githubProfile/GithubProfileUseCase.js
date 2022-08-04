"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GithubProfileUseCase = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _Winston = require("../../errors/Winston");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class GithubProfileUseCase {
  async execute(username) {
    const baseURL = process.env.BASE_URL_GITHUB;

    try {
      const url = `${baseURL}/${username}`;
      const response = await _axios.default.get(url);

      _Winston.logger.info({
        GithubProfileUseCase: {
          username: username,
          url: url,
          method: response.config.method,
          result: response.data
        }
      });

      return response.data;
    } catch (error) {
      _Winston.logger.error("invalid parameters");
    }
  }

}

exports.GithubProfileUseCase = GithubProfileUseCase;