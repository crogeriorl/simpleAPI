"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ddTrace = _interopRequireDefault(require("dd-trace"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_ddTrace.default.init({
  logInjection: true
}); // initialized in a different file to avoid hoisting.


var _default = _ddTrace.default;
exports.default = _default;