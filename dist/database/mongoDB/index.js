"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mongoConnect = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _Winston = require("../../errors/Winston");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose.default.set("debug", function (collectionName, method, query) {
  const result = {
    collectionName,
    method,
    query
  };

  _Winston.logger.info(result);
});

const mongoConnect = _mongoose.default.connect(`${process.env.URL_MONGODB}`).then(() => {
  _Winston.logger.info("Connect to database");
}).catch(err => _Winston.logger.error(err.message));

exports.mongoConnect = mongoConnect;